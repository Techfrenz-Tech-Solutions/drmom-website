import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import Icon from "../../components/Icon/Icon";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { listCourses } from "../../utils/api";
import "./Courses.css";

// Course-first browsing: Class/Subject are filters here, not the entry
// point — a Course is the thing a student actually buys, so it's the
// primary card grid. /classes and /classes/:classId still exist and still
// work for anyone with an old link; this page is what Home/Navbar link to now.
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [classFilter, setClassFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  useEffect(() => {
    let mounted = true;
    listCourses()
      .then((data) => { if (mounted) setCourses(data.courses || []); })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  const classOptions = useMemo(
    () => [...new Set(courses.map((c) => c.classLabel).filter(Boolean))],
    [courses],
  );
  const subjectOptions = useMemo(
    () => [...new Set(
      courses
        .filter((c) => !classFilter || c.classLabel === classFilter)
        .map((c) => c.subject)
        .filter(Boolean),
    )],
    [courses, classFilter],
  );

  useEffect(() => {
    if (subjectFilter && !subjectOptions.includes(subjectFilter)) setSubjectFilter("");
  }, [subjectOptions, subjectFilter]);

  const filteredCourses = useMemo(
    () => courses.filter((c) =>
      (!classFilter || c.classLabel === classFilter) &&
      (!subjectFilter || c.subject === subjectFilter),
    ),
    [courses, classFilter, subjectFilter],
  );

  return (
    <div className="courses-page page-wrapper">
      <ParticleBackground density={50} />

      <section className="courses-hero section">
        <div className="container">
          <div className="tag anim-fadeInUp"><Icon name="bookOpen" size={13} /> All Courses</div>
          <h1 className="section-title anim-fadeInUp delay-1">
            Find the Right <span className="gradient-text">Course</span>
          </h1>
          <div className="divider anim-fadeInUp delay-2" />
          <p className="section-subtitle anim-fadeInUp delay-2">
            Browse every course on Dr Mom 2.0, or narrow it down by class and subject.
          </p>
        </div>
      </section>

      <section className="section courses-list-section">
        <div className="container">
          <div className="courses-filters">
            <div className="courses-filter">
              <label htmlFor="course-class-filter">Class</label>
              <select
                id="course-class-filter"
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                <option value="">All Classes</option>
                {classOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="courses-filter">
              <label htmlFor="course-subject-filter">Subject</label>
              <select
                id="course-subject-filter"
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
              >
                <option value="">All Subjects</option>
                {subjectOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            {(classFilter || subjectFilter) && (
              <button
                type="button"
                className="btn btn-ghost courses-filter__clear"
                onClick={() => { setClassFilter(""); setSubjectFilter(""); }}
              >
                Clear filters
              </button>
            )}
          </div>

          {loading ? (
            <LoadingSpinner text="Loading courses..." />
          ) : filteredCourses.length === 0 ? (
            <div className="courses-empty">
              <Icon name="search" size={32} />
              <p>No courses match these filters yet.</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map((course, i) => (
                <Link
                  to={`/courses/${course.slug}`}
                  key={course.id}
                  className="course-card glass-panel anim-fadeInUp"
                  style={{ animationDelay: `${i * 0.05}s`, "--course-color": course.color || "#6c63ff" }}
                >
                  <div className="course-card__thumb">
                    {course.thumbnailUrl ? (
                      <img src={course.thumbnailUrl} alt={course.title} loading="lazy" />
                    ) : (
                      <span className="course-card__emoji">{course.emoji || "📚"}</span>
                    )}
                  </div>
                  <div className="course-card__body">
                    <div className="course-card__badges">
                      {course.classLabel && <span className="badge-pill">{course.classLabel}</span>}
                      {course.subject && <span className="badge-pill badge-pill--muted">{course.subject}</span>}
                    </div>
                    <h3 className="course-card__title">{course.title}</h3>
                    <p className="course-card__tagline">{course.tagline || course.shortDescription}</p>
                    <div className="course-card__footer">
                      <span className="course-card__price">{course.price}</span>
                      <span className="course-card__cta">View Course →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
