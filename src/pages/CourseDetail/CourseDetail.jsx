import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import VideoCard from "../../components/VideoCard/VideoCard";
import Icon from "../../components/Icon/Icon";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getCourse } from "../../utils/api";
import "../VideoContent/VideoContent.css"; // reuses .vc-grid for the video card layout
import "./CourseDetail.css";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getCourse(courseSlug)
      .then((data) => { if (mounted) setCourse(data.course); })
      .catch((err) => { if (mounted) setError(err.message || "Course not found"); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [courseSlug]);

  // course.lessons is chapter-video data (see backend course.service.js) —
  // group back into chapters for display, same dedupe-by-label VideoContent
  // already used, just scoped to this one course instead of a whole class.
  const chapters = useMemo(() => {
    if (!course) return [];
    const seen = new Map();
    for (const video of course.lessons) {
      if (!seen.has(video.chapter)) seen.set(video.chapter, { label: video.chapter, index: video.chapterIndex, videos: [] });
      seen.get(video.chapter).videos.push(video);
    }
    return [...seen.values()].sort((a, b) => (a.index || 0) - (b.index || 0));
  }, [course]);

  const handleBuyCourse = () => {
    if (!course) return;
    navigate("/payment", {
      state: {
        plan: {
          name: course.title,
          price: course.price,
          period: "Full course access",
          color: course.color || "#6c63ff",
          courseId: course.id,
          courseSlug: course.slug,
          features: course.features?.length
            ? course.features
            : ["Full course access", "All chapters & videos", "Downloadable notes"],
        },
        classInfo: {
          id: course.classId,
          fullLabel: course.classLabel,
          color: course.color,
          courseSlug: course.slug,
        },
      },
    });
  };

  const handleUnlockVideo = () => handleBuyCourse();

  if (loading) {
    return (
      <div className="page-wrapper" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LoadingSpinner text="Loading course..." />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="page-wrapper" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <h2>Course not found</h2>
        <Link to="/courses" className="btn btn-primary">← Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page page-wrapper">
      <ParticleBackground density={40} />

      <div className="cd-breadcrumb">
        <div className="container cd-breadcrumb__inner">
          <Link to="/" className="cd-breadcrumb__link">Home</Link>
          <span>›</span>
          <Link to="/courses" className="cd-breadcrumb__link">Courses</Link>
          <span>›</span>
          <span className="cd-breadcrumb__current">{course.title}</span>
        </div>
      </div>

      <header className="cd-header" style={{ "--course-color": course.color || "#6c63ff" }}>
        <div className="container cd-header__inner">
          <div className="cd-header__badges">
            {course.classLabel && <span className="badge-pill">{course.classLabel}</span>}
            {course.subject && <span className="badge-pill badge-pill--muted">{course.subject}</span>}
          </div>
          <h1 className="cd-header__title">{course.title}</h1>
          <p className="cd-header__desc">{course.description}</p>

          <div className="cd-header__actions">
            <span className="cd-header__price">{course.price}</span>
            {course.ownsCourse ? (
              <span className="cd-header__owned"><Icon name="checkCircle" size={16} /> You own this course</span>
            ) : (
              <button className="btn btn-primary" onClick={handleBuyCourse} type="button">
                Buy This Course →
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="section cd-main">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>Chapters</h2>

          {chapters.length === 0 ? (
            <p style={{ color: "var(--text-muted, #94a3b8)" }}>No chapters have been added to this course yet.</p>
          ) : (
            chapters.map((ch) => (
              <div key={ch.label} className="cd-chapter">
                <h3 className="cd-chapter__title">
                  <Icon name="bookOpen" size={16} /> {ch.label}
                </h3>
                <div className="vc-grid">
                  {ch.videos.map((video, i) => (
                    <VideoCard key={video.id} video={video} index={i} onUnlock={handleUnlockVideo} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
