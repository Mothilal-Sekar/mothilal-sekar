import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

/* ---------- 3D HERO OBJECT ---------- */
function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#6366f1" wireframe />
      </mesh>
    </Float>
  );
}

/* ---------- TIMELINE ITEM ---------- */
function TimelineItem({ period, title, description }) {
  return (
    <div style={styles.timelineItem}>
      <div style={styles.dot} />
      <div style={styles.content}>
        <span style={styles.period}>{period}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function PortfolioTimeline() {
  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 3]} />
          <FloatingSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>

        <div style={styles.heroText}>
          <h1>Mothilal S</h1>
          <h2>Senior Software Engineer</h2>
          <h2><a target="_blank" href="mailto:mothilal.sekar@gmail.com">mothilal.sekar@gmail.com</a> <span style={{padding:'10px', fontSize:20}}>|</span> <a target="_blank" href="tel:+919787252118">+919787252118</a> <span style={{padding:'10px', fontSize:20}}>|</span> <a target="_blank" href="https://github.com/mothilal-sekar">GitHub</a> <span style={{padding:'10px', fontSize:20}}>|</span> <a target="_blank" href="https://linkedin.com/in/mothilal-sekar">LinkedIn</a></h2>
          <p>
            React  • React Native  • MongoDB  • NodeJS  • Python Flask • Linux • Docker • Minio S3
          </p>
          <p>
            AWS EC2 & S3 • Postgresql • Springboot (Beginner)
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={styles.timeline}>
        <h2 style={styles.sectionTitle}>Career Timeline</h2>

        <TimelineItem
          period="2016 – 2020"
          title="Computer Science Engineering"
          description="Completed B.E. in Computer Science Engineering. Built strong foundations in programming, data structures, and software engineering concepts."
        />

        <TimelineItem
          period="2021"
          title="React Native Developer"
          description="Started professional career at Selvi Software Technologies, developing cross-platform mobile applications using React Native and delivering pixel-perfect UI."
        />

        <TimelineItem
          period="2021 – 2022"
          title="Mobile Application Developer"
          description="Published applications to Google Play Store and Apple App Store. Worked with TestFlight, API integrations, responsive layouts, and performance tuning."
        />

        <TimelineItem
          period="2022"
          title="Full Stack Developer (MERN)"
          description="Joined Vknowlabs and contributed to full-stack development using React, Node.js, MongoDB, and Python Flask APIs for enterprise applications."
        />

        <TimelineItem
          period="2023"
          title="Senior Software Engineer"
          description="Took ownership of frontend and mobile applications, led feature development, handled production deployments, and optimized system performance."
        />

        <TimelineItem
          period="2024"
          title="Cloud, DevOps & Automation"
          description="Worked on AWS, Linux servers, Nginx, MinIO S3 storage, cron jobs, monitoring, and Docker-based deployments in production environments."
        />

        <TimelineItem
          period="2025 – Present"
          title="React & React Native Specialist"
          description="Focused on building scalable, high-performance web and mobile applications. Mentoring developers, solving production issues, and upskilling in Spring Boot."
        />
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Mothilal S · Built with React & Three.js
      </footer>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  page: {
    background: "#020617",
    color: "#e5e7eb",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  hero: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  },
  heroText: {
    padding: "4rem",
  },
  timeline: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "6rem 2rem",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "4rem",
  },
  timelineItem: {
    position: "relative",
    paddingLeft: "2.5rem",
    marginBottom: "3.5rem",
    borderLeft: "2px solid #6366f1",
  },
  dot: {
    position: "absolute",
    left: "-9px",
    top: "4px",
    width: "16px",
    height: "16px",
    background: "#6366f1",
    borderRadius: "50%",
  },
  content: {
    paddingLeft: "1.5rem",
  },
  period: {
    fontSize: "0.9rem",
    opacity: 0.7,
  },
  footer: {
    textAlign: "center",
    padding: "2rem",
    opacity: 0.6,
  },
};






// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Float } from "@react-three/drei";

// /* 3D Sphere Component */
// function FloatingSphere() {
//   return (
//     <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
//       <mesh>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color="#4f46e5" wireframe />
//       </mesh>
//     </Float>
//   );
// }

// /* Timeline Item */
// function TimelineItem({ year, title, description }) {
//   return (
//     <div style={styles.timelineItem}>
//       <div style={styles.timelineDot} />
//       <div style={styles.timelineContent}>
//         <h3>{year}</h3>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function PortfolioTimeline() {
//   return (
//     <div style={styles.page}>
//       {/* HERO SECTION */}
//       <section style={styles.hero}>
//         <Canvas camera={{ position: [0, 0, 5] }}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 2]} />
//           <FloatingSphere />
//           <OrbitControls enableZoom={false} />
//         </Canvas>

//         <div style={styles.heroText}>
//           <h1>Mothilal S</h1>
//           <h2>Senior Software Engineer</h2>
//           <p>React • React Native • MERN • Three.js</p>
//         </div>
//       </section>

//       {/* TIMELINE SECTION */}
//       <section style={styles.timeline}>
//         <h2 style={styles.sectionTitle}>Career Timeline</h2>

//         <TimelineItem
//           year="2021"
//           title="Mobile Application Developer"
//           description="Started career with React Native. Built cross-platform apps and published to Play Store & App Store."
//         />

//         <TimelineItem
//           year="2022"
//           title="Software Engineer – Full Stack"
//           description="Developed MERN stack applications with React, Node.js, MongoDB, and Python Flask APIs."
//         />

//         <TimelineItem
//           year="2023"
//           title="Senior Software Engineer"
//           description="Led frontend & mobile development, deployed production apps on AWS & On-Premise servers."
//         />

//         <TimelineItem
//           year="2024–2025"
//           title="Advanced Full Stack & DevOps"
//           description="Worked on scalable systems, MinIO S3, Docker, Linux, and Spring Boot (beginner)."
//         />
//       </section>

//       {/* FOOTER */}
//       <footer style={styles.footer}>
//         <p>© 2026 Mothilal S | Built with React & Three.js</p>
//       </footer>
//     </div>
//   );
// }

// /* STYLES */
// const styles = {
//   page: {
//     background: "#0f172a",
//     color: "#e5e7eb",
//     fontFamily: "Inter, sans-serif",
//   },
//   hero: {
//     height: "100vh",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     alignItems: "center",
//   },
//   heroText: {
//     padding: "4rem",
//   },
//   timeline: {
//     padding: "6rem 2rem",
//     maxWidth: "900px",
//     margin: "0 auto",
//   },
//   sectionTitle: {
//     textAlign: "center",
//     marginBottom: "4rem",
//     fontSize: "2.5rem",
//   },
//   timelineItem: {
//     position: "relative",
//     paddingLeft: "2rem",
//     marginBottom: "3rem",
//     borderLeft: "2px solid #4f46e5",
//   },
//   timelineDot: {
//     position: "absolute",
//     left: "-9px",
//     top: "0",
//     width: "16px",
//     height: "16px",
//     background: "#4f46e5",
//     borderRadius: "50%",
//   },
//   timelineContent: {
//     paddingLeft: "1.5rem",
//   },
//   footer: {
//     textAlign: "center",
//     padding: "2rem",
//     opacity: 0.7,
//   },
// };



