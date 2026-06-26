import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import Icon from "../../components/Icon/Icon";
import { STATS, TEAM } from "../../data";
import "./About.css";

const VALUES = [
  { icon: "target",    title: "Child-First Design",        desc: "Every decision begins with one question: is this the best experience for the child?" },
  { icon: "globe",     title: "Accessibility",              desc: "High-quality education should be available to every family, regardless of location or budget." },
  { icon: "lightbulb", title: "Joyful Learning",            desc: "We believe children learn best when they are curious, confident, and having fun." },
  { icon: "flask",     title: "Evidence-Based Pedagogy",    desc: "Our curriculum is grounded in proven cognitive science and expert educator insight." },
];

const About = () => (
  <div className="about page-wrapper">
    <ParticleBackground density={50} />

    {/* Hero */}
    <section className="about-hero section">
      <div className="about-hero__orb" aria-hidden="true" />
      <div className="container about-hero__inner">
        <div className="tag anim-fadeInUp"><Icon name="school" size={13} /> About Dr Mom 2.0</div>
        <h1 className="section-title anim-fadeInUp delay-1">
          Redefining How<br />
          <span className="gradient-text">Young India Learns</span>
        </h1>
        <div className="divider anim-fadeInUp delay-2" />
        <p className="about-hero__desc anim-fadeInUp delay-2">
          Dr Mom 2.0 is a premium educational technology platform dedicated to
          children from LKG through Grade 5. We combine expert-designed
          curriculum with cinematic video production to create learning
          experiences that children genuinely love.
        </p>
        <p className="about-hero__desc anim-fadeInUp delay-3">
          Founded by educators, technologists, and parents, we exist to
          ensure no child's potential goes unrealised due to lack of access
          to high-quality, engaging learning resources.
        </p>

        {/* Stats */}
        <div className="about-stats anim-fadeInUp delay-4">
          {STATS.map((s, i) => (
            <div key={i} className="about-stat glass-panel">
              <span className="about-stat__value gradient-text">{s.value}</span>
              <span className="about-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section about-mission">
      <div className="container about-mission__inner">
        <div className="about-mission__text">
          <div className="tag"><Icon name="target" size={13} /> Our Mission</div>
          <h2 className="section-title">
            Every Child Deserves a{" "}
            <span className="gradient-text-purple">Brilliant Start</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            We believe the foundation years (LKG–Grade 5) are the most critical
            period in a child's academic journey. Our mission is to make this
            foundation unshakeable — through content that inspires, methods that
            work, and technology that empowers.
          </p>
          <p className="about-mission__para">
            Our team of 100+ certified teachers, curriculum designers, and
            child psychologists collaborate to create lessons that are not only
            aligned to the national curriculum but also spark genuine curiosity
            and a lifelong love for learning.
          </p>
        </div>
        <div className="about-mission__visual glass-panel">
          <div className="about-mission__quote">
            <span className="about-mission__quote-mark">"</span>
            <p>
              The mind is not a vessel to be filled,<br />
              but a fire to be kindled.
            </p>
            <span className="about-mission__quote-author">— Plutarch</span>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section about-values">
      <div className="about-values__bg" aria-hidden="true" />
      <div className="container">
        <div className="about-values__header">
          <div className="tag"><Icon name="diamond" size={13} /> Our Values</div>
          <h2 className="section-title">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <div className="divider" />
        </div>
        <div className="about-values__grid">
          {VALUES.map(({ icon, title, desc }, i) => (
            <div key={i} className={`about-value-card glass-panel anim-fadeInUp delay-${i + 1}`}>
              <span className="about-value-card__icon"><Icon name={icon} size={28} /></span>
              <h3 className="about-value-card__title">{title}</h3>
              <p className="about-value-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section about-team">
      <div className="container">
        <div className="about-team__header">
          <div className="tag"><Icon name="users" size={13} /> Leadership Team</div>
          <h2 className="section-title">
            The <span className="gradient-text">Minds</span> Behind Dr Mom 2.0
          </h2>
          <div className="divider" />
        </div>
        <div className="about-team__grid">
          {TEAM.map(({ name, role, initials, bg }, i) => (
            <div key={i} className={`team-card glass-panel anim-fadeInUp delay-${i + 1}`}>
              <div className="team-card__avatar" style={{ background: bg }}>{initials}</div>
              <h4 className="team-card__name">{name}</h4>
              <p className="team-card__role">{role}</p>
              <div className="team-card__links">
                {["in", "tw"].map((l) => (
                  <a key={l} href="#!" className="team-card__link">{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
