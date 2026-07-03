import React, { useState } from "react";
import { apiRequest } from "../../utils/api";
import "./VideoCard.css";

const VideoCard = ({ video, index = 0, onUnlock }) => {
  const [playing, setPlaying] = useState(false);
  const [playbackUrl, setPlaybackUrl] = useState("");
  const [error, setError] = useState("");
  const { title, thumbnail, duration, views, rating, isLocked, desc, chapter, videoUrl, chapterId } = video;

  const handleUnlock = (e) => {
    e.stopPropagation();
    if (onUnlock) {
      onUnlock(video);
      return;
    }

    // Fallback: scroll to pricing section if it exists on the page
    const pricingEl = document.getElementById("pricing-section");
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePlay = async () => {
    setError("");
    try {
      // Video content lives inside a Chapter now (Class -> Subject -> Course
      // -> Chapter), not a standalone Lesson — chapterId comes through on
      // the catalog payload alongside the video's own id.
      const data = await apiRequest(`/courses/chapters/${chapterId}/videos/${video.id}/playback`);
      setPlaybackUrl(data.playback?.embedUrl || videoUrl || "");
      setPlaying(true);
    } catch (error) {
      setError(error.message || "Video is not available yet.");
    }
  };

  return (
    <div
      className={`video-card anim-fadeInUp ${isLocked ? "video-card--locked" : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* Thumbnail / Player */}
      <div className="video-card__media">
        {playing && !isLocked ? (
          <iframe
            src={(() => { const u = playbackUrl || videoUrl || ""; return u + (u.includes("?") ? "&" : "?") + "autoplay=1"; })()}
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video-card__iframe"
          />
        ) : (
          <>
            <img
              src={thumbnail || "https://picsum.photos/seed/drmomlesson/400/225"}
              alt={title}
              className="video-card__thumb"
              loading="lazy"
            />
            <div className="video-card__overlay">
              {isLocked ? (
                <div className="video-card__lock" onClick={handleUnlock} style={{ cursor: "pointer" }}>
                  <span className="video-card__lock-icon">🔒</span>
                  <span className="video-card__lock-label">Buy Lesson</span>
                </div>
              ) : (
                <button
                  className="video-card__play-btn"
                  onClick={handlePlay}
                  aria-label={`Play ${title}`}
                >
                  <span className="video-card__play-icon">▶</span>
                </button>
              )}
            </div>
            <span className="video-card__duration">{duration}</span>
          </>
        )}
      </div>

      {/* Body */}
      <div className="video-card__body">
        <p className="video-card__chapter">{chapter}</p>
        <h4 className="video-card__title">{title}</h4>
        <p className="video-card__desc">{error || desc}</p>

        <div className="video-card__meta">
          <span className="video-card__views">👁 {views}</span>
          <span className="video-card__rating">⭐ {rating}</span>
        </div>

        {isLocked ? (
          <button className="video-card__unlock-btn" onClick={handleUnlock}>
            <span>🔐</span> Buy this Lesson
          </button>
        ) : (
          <button
            className="video-card__watch-btn"
            onClick={handlePlay}
          >
            <span>▶</span> Watch Free
          </button>
        )}
      </div>

      {isLocked && <div className="video-card__lock-overlay" aria-hidden="true" />}
    </div>
  );
};

export default VideoCard;
