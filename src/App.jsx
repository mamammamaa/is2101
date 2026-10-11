import React, { useEffect, useState } from "react";
const features = [
  ["Route Selection", "Choose the way that works for you."],
  ["Shuttle Integration", "Your campus shuttle, part of the journey."],
  ["Indoor Navigation", "From the entrance to the right classroom."],
  ["AR Guidance", "See your next turn, right in front of you."],
];
const stops = ["University Town", "University Hall", "Central Library", "COM2"];
function Icon({ name, size = 18 }) {
  const paths = {
    bus: (
      <>
        <rect x="4" y="3" width="16" height="15" rx="3" />
        <path d="M4 10h16M8 18v3m8-3v3M8 14h1m6 0h1M9 6h6" />
      </>
    ),
    walk: (
      <>
        <circle cx="14" cy="4" r="2" />
        <path d="m12 8-3 5-4 1m7-6 4 5 4 1m-8-3 3 5-1 6m-2-10-4 10" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    umbrella: (
      <>
        <path d="M3 12a9 9 0 0 1 18 0H3zm9 0v7a2 2 0 0 0 4 0M12 1v2" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    bell: (
      <>
        <path d="M5 17h14l-2-4V9a5 5 0 0 0-10 0v4l-2 4zm5 3h4M12 2v2" />
      </>
    ),
    door: (
      <>
        <path d="M5 21V4l12-2v19M2 21h20M13 11v2M17 5h3v16" />
      </>
    ),
    arrow: <path d="M4 12h16m-7-7 7 7-7 7" />,
    scan: <path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6M7 12h10" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.pin}
    </svg>
  );
}
function Pin({ x, y, color = "#ff681d" }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M0 12C-22-10-10-25 0-25S22-10 0 12"
        fill={color}
        stroke="white"
        strokeWidth="3"
      />
      <circle cy="-11" r="4" fill="white" />
    </g>
  );
}
function CampusMap({ moving }) {
  return (
    <svg
      className={"campus-map " + (moving ? "travelling" : "")}
      viewBox="0 0 360 280"
      aria-label="Illustrative campus route from University Town to COM2, then COM3"
    >
      <defs>
        <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1" fill="#d8e3ef" />
        </pattern>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity=".12" />
        </filter>
      </defs>
      <rect width="360" height="280" fill="#f3f8fb" />
      <rect width="360" height="280" fill="url(#dots)" />
      <g fill="none" stroke="white" strokeWidth="19">
        <path d="M-5 65Q80 55 130 65T365 55M110 0Q140 95 80 210M28 258Q96 235 125 190T365 128" />
      </g>
      <g fill="none" stroke="#d2dce8" strokeWidth="2">
        <path d="M-5 65Q80 55 130 65T365 55M110 0Q140 95 80 210M28 258Q96 235 125 190T365 128" />
      </g>
      <g fill="white" stroke="#dce5ee" filter="url(#shadow)">
        <path d="m26 92 65-6 6 43-67 6Z" />
        <path d="m131 93 68-7 5 45-68 6Z" />
        <path d="m245 76 84 7-5 50-83-7Z" />
        <path d="m243 194 74-18 12 46-73 17Z" />
        <path d="m122 190 69-15 9 42-69 13Z" />
      </g>
      <g fill="#60718a" fontSize="9" fontWeight="700" textAnchor="middle">
        <text x="62" y="115">
          UTown
        </text>
        <text x="167" y="117">
          SDE
        </text>
        <text x="284" y="127">
          COM3
        </text>
        <text x="282" y="210">
          COM2
        </text>
        <text x="162" y="205">
          Central Library
        </text>
      </g>
      <path
        className="walk-line"
        d="M61 232 103 212M239 149 282 111"
        fill="none"
        stroke="#b42b8a"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <path
        className="shuttle-line"
        d="M103 212 155 196 199 182 239 149"
        fill="none"
        stroke="#244e87"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <g fill="white" strokeWidth="3">
        <circle cx="61" cy="232" r="12" stroke="#602d85" />
        <circle cx="61" cy="232" r="5" fill="#602d85" stroke="none" />
        <circle cx="103" cy="212" r="7" stroke="#244e87" />
        <circle cx="239" cy="149" r="7" stroke="#244e87" />
      </g>
      <Pin x={282} y={111} />
      <rect x="145" y="154" width="76" height="28" rx="14" fill="#244e87" />
      <text x="156" y="173" fill="white" fontSize="13">
        ▣
      </text>
      <text x="185" y="172" fill="white" fontSize="9" fontWeight="800">
        D1
      </text>
      <g fontSize="8" fontWeight="800" fill="#244e87">
        <text x="89" y="202">
          BOARD
        </text>
        <text x="247" y="159">
          ALIGHT
        </text>
      </g>
      <g fontSize="8" fontWeight="700">
        <rect x="22" y="11" width="101" height="25" rx="13" fill="white" />
        <circle cx="35" cy="24" r="4" fill="#602d85" />
        <text x="45" y="27" fill="#36506b">
          Current location
        </text>
        <rect x="241" y="11" width="97" height="25" rx="13" fill="white" />
        <circle cx="255" cy="24" r="4" fill="#ff681d" />
        <text x="266" y="27" fill="#36506b">
          Room 01-20
        </text>
        <text x="246" y="272" fill="#7b8da3">
          ILLUSTRATIVE ROUTE
        </text>
      </g>
    </svg>
  );
}
function FloorMap() {
  return (
    <svg
      className="floor-map"
      viewBox="0 0 360 282"
      aria-label="COM3 Level 1 floor plan showing route from entrance to Seminar Room 01-20"
    >
      <defs>
        <filter id="roomshadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".1" />
        </filter>
      </defs>
      <rect width="360" height="282" fill="#f5f8fa" />
      {[
        [24, 25, 88, 72, "Meeting room"],
        [120, 25, 94, 72, "Project room"],
        [24, 183, 83, 73, "Lift lobby"],
        [115, 183, 73, 73, "Stairs"],
        [196, 183, 63, 73, "Services"],
        [267, 183, 72, 73, "Lab"],
      ].map(([x, y, w, h, label]) => (
        <g key={label}>
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            rx="7"
            fill="white"
            stroke="#c3d0dc"
            strokeWidth="2"
            filter="url(#roomshadow)"
          />
          <text
            x={x + w / 2}
            y={y + h / 2 + 4}
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="#637a96"
          >
            {label}
          </text>
        </g>
      ))}
      <rect
        x="222"
        y="25"
        width="117"
        height="72"
        rx="7"
        fill="#fff1e6"
        stroke="#ff681d"
        strokeWidth="3"
      />
      <g fill="#864002" textAnchor="middle" fontWeight="800">
        <text x="280" y="50" fontSize="8">
          DESTINATION
        </text>
        <text x="280" y="67" fontSize="11">
          Seminar Room
        </text>
        <text x="280" y="82" fontSize="11">
          01-20
        </text>
      </g>
      <rect
        x="24"
        y="110"
        width="315"
        height="58"
        rx="16"
        fill="white"
        stroke="#d9e3ed"
        strokeWidth="2"
      />
      <path
        d="M50 263V140H213Q245 140 273 97"
        fill="none"
        stroke="#602681"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        className="indoor-dashes"
        d="M50 263V140H213Q245 140 273 97"
        fill="none"
        stroke="#b68ccc"
        strokeWidth="3"
        strokeDasharray="1 11"
        strokeLinecap="round"
      />
      <circle r="6" fill="white" stroke="#602681" strokeWidth="3">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          path="M50 263V140H213Q245 140 273 97"
        />
      </circle>
      <Pin x={273} y={100} />
      <rect x="13" y="248" width="71" height="23" rx="12" fill="#602681" />
      <text
        x="49"
        y="263"
        fill="white"
        textAnchor="middle"
        fontSize="8"
        fontWeight="800"
      >
        ENTRANCE
      </text>
    </svg>
  );
}
function Corridor() {
  return (
    <svg
      className="corridor"
      viewBox="0 0 390 740"
      preserveAspectRatio="none"
      aria-label="Illustrated COM3 corridor with left turn AR guidance"
    >
      <defs>
        <linearGradient id="hall" x2="0" y2="1">
          <stop stopColor="#293f4b" />
          <stop offset=".3" stopColor="#dce3e6" />
          <stop offset="1" stopColor="#adbcc5" />
        </linearGradient>
        <linearGradient id="orange" x2="0" y2="1">
          <stop stopColor="#ff9e6e" />
          <stop offset="1" stopColor="#ff671d" />
        </linearGradient>
        <filter id="glow">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="5"
            floodColor="#55236c"
            floodOpacity=".5"
          />
        </filter>
      </defs>
      <rect width="390" height="740" fill="url(#hall)" />
      <path d="M0 70 109 310H282L390 70Z" fill="#c2cdd2" opacity=".6" />
      <path d="M0 170 109 310 15 740H0Z" fill="#91a3ad" />
      <path d="m390 170-108 140 94 430h14Z" fill="#8497a1" />
      <path d="M109 310H282L377 740H15Z" fill="#c4cdd1" />
      <g stroke="#9baeb9" strokeWidth="1.5" opacity=".7">
        <path d="m109 310-94 430m173-430-25 430m72-430 24 430m23-430 95 430M89 395h214M69 487h254M47 587h299M22 705h347" />
      </g>
      <path d="M0 177 75 231V554L0 617Z" fill="#7c919b" />
      <path d="m9 207 52 41v278L9 575Z" fill="#526b77" />
      <path d="m390 177-75 53v324l75 63Z" fill="#7c919b" />
      <path d="m380 207-53 41v278l53 49Z" fill="#526b77" />
      <rect x="24" y="345" width="14" height="28" rx="2" fill="#c4d4dc" />
      <path d="m300 274 20-15v48l-20 12Z" fill="#60307f" />
      <path d="m303 280 14-11v27l-14 10Z" fill="#ff7427" />
      <g stroke="#a7b6be" strokeWidth="5">
        <path d="M104 110v200m183-200v200" />
      </g>
      <g fill="#edf1f2" opacity=".6">
        <rect x="139" y="183" width="112" height="16" rx="6" />
        <rect x="158" y="249" width="72" height="10" rx="5" />
      </g>
      <ellipse
        className="ar-pulse"
        cx="195"
        cy="535"
        rx="45"
        ry="15"
        fill="#ff8d53"
        opacity=".28"
      />
      <ellipse
        cx="195"
        cy="535"
        rx="34"
        ry="9"
        fill="#ff7938"
        opacity=".5"
        stroke="white"
        strokeWidth="2"
      />
      <g className="ar-arrow" filter="url(#glow)">
        <path
          d="M251 458h-43v-60q0-44-25-48v28l-46-45 48-40v26q66 6 66 81Z"
          fill="url(#orange)"
          stroke="white"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="m148 333 29-25v23q57 4 57 69"
          fill="none"
          stroke="#ffcfb4"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
function Header({ screen, back }) {
  return (
    <header className="app-header">
      <button className="back" onClick={back} aria-label="Previous screen">
        ←
      </button>
      <span className="app-logo">
        NUS<span>Map</span>
      </span>
      <span className="kellton">
        POWERED BY <b>∞ Kellton</b>
      </span>
      <span className="screen-tag">
        {["ROUTE OPTIONS", "SHUTTLE LEG", "NAVIGATING"][screen]}
      </span>
    </header>
  );
}
function Route({ route, setRoute, start, starting }) {
  return (
    <div className="screen-content route-screen">
      <div className="card locations">
        <div className="location-track">
          <i />
          <span />
          <i />
        </div>
        <div>
          <b>Current location</b>
          <small>University Town</small>
          <b>COM3 Seminar Room 01-20</b>
          <small>Computing · Level 1</small>
        </div>
      </div>
      <div className="section-title">
        <div>
          <h3>Choose your route</h3>
          <small>Compare shuttle and walking options</small>
        </div>
        <span className="badge">YOUR CHOICE</span>
      </div>
      {["Shuttle + walk", "Sheltered route"].map((name, i) => (
        <button
          key={name}
          className={"route-option card " + (route === i ? "selected" : "")}
          onClick={() => setRoute(i)}
          aria-pressed={route === i}
        >
          <span className={"icon-box " + (i ? "pink" : "")}>
            <Icon name={i ? "umbrella" : "bus"} />
          </span>
          <span className="route-detail">
            <strong>
              {name} {route === i && <em>✓ SELECTED</em>}
            </strong>
            <span className="metrics">
              <span>
                <Icon name="clock" size={12} />
                {i ? "15" : "12"} min
              </span>
              <span>
                <Icon name="walk" size={12} />
                {i ? "980 m" : "320 m walk"}
              </span>
              <span>
                <Icon name={i ? "umbrella" : "bus"} size={12} />
                {i ? "86% covered" : "D1 · 3 stops"}
              </span>
            </span>
          </span>
          <span className="radio" />
        </button>
      ))}
      <div className="map-card">
        <CampusMap moving={starting} />
      </div>
      <div className="map-legend">
        <span>
          <i className="pink-line" /> Walk　 <i /> Shuttle D1
        </span>
        <span>Not to scale</span>
      </div>
      <div className="route-note">
        <Icon name={route ? "umbrella" : "bus"} size={16} />
        <span>
          {route
            ? "Sheltered walking route selected. The next screen previews the optional D1 shuttle connection."
            : "Campus shuttle included. Board D1 at UTown, alight at COM2, then walk to COM3."}
        </span>
      </div>
      <button className="primary" onClick={start} disabled={starting}>
        <Icon name="arrow" />
        {starting
          ? "Starting your journey…"
          : route
            ? "Start sheltered route"
            : "Start shuttle + walk route"}
      </button>
    </div>
  );
}
function Shuttle({ stop, setStop, notify, setNotify, go }) {
  return (
    <div className="screen-content shuttle-screen">
      <div className="card board-card">
        <span className="icon-box navy">
          <Icon name="bus" size={26} />
        </span>
        <div>
          <label>CAMPUS SHUTTLE · D1</label>
          <h2>{stop === 3 ? "Arrived at COM2" : "Board at UTown"}</h2>
          <small>
            <span className="live-dot" />{" "}
            {stop === 3 ? "Your next leg is ready" : "Next shuttle in 3 min"}
          </small>
        </div>
        <span className="badge green">ON TIME</span>
      </div>
      <div className="section-title">
        <div>
          <h3>Ride 3 stops</h3>
          <small>Stay on D1 until COM2</small>
        </div>
        <span className="badge">
          <Icon name="clock" size={11} /> 6 min
        </span>
      </div>
      <div className="card stops">
        {stops.map((name, i) => (
          <button
            key={name}
            className={
              "stop " +
              (i <= stop ? "reached " : "") +
              (i === stop ? "current" : "")
            }
            onClick={() => setStop(i)}
            aria-label={`Simulate arrival at ${name}`}
          >
            <span className={"stop-dot " + (i === 3 ? "orange" : "")}>
              {i === stop && i !== 0 && i !== 3 ? (
                <Icon name="bus" size={12} />
              ) : null}
            </span>
            <div>
              <b>{name}</b>
              <small>
                {i === 0
                  ? "Board D1 here"
                  : i === 3
                    ? "Alight here"
                    : `${i} stop${i === 1 ? "" : "s"} away`}
              </small>
            </div>
            {(i === 0 || i === 3) && (
              <span className={"badge " + (i === 3 ? "orange" : "")}>
                {i === 0 ? "BOARD" : "ALIGHT"}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="card trip-stats">
        {[
          ["clock", "3 min", "Next arrival"],
          ["bus", "3 stops", "Shuttle ride"],
          ["walk", "220 m", "After alighting"],
        ].map(([icon, txt, sub]) => (
          <div key={txt}>
            <Icon name={icon} size={15} />
            <span>
              <b>{txt}</b>
              <small>{sub}</small>
            </span>
          </div>
        ))}
      </div>
      <button className="card next-leg" onClick={() => go(2)}>
        <span className="icon-box peach">
          <Icon name="pin" />
        </span>
        <div>
          <label>NEXT LEG AFTER COM2</label>
          <b>Walk to the COM3 entrance</b>
        </div>
        <span>›</span>
      </button>
      <button
        className="primary"
        onClick={() => setNotify(!notify)}
        aria-pressed={notify}
      >
        <Icon name="bell" />
        {notify ? "✓ Reminder set for COM2" : "Notify me before COM2"}
      </button>
      <button
        className="advance-stop"
        onClick={() => (stop < 3 ? setStop(stop + 1) : go(2))}
      >
        {stop < 3 ? "Simulate next stop →" : "Continue to COM3 →"}
      </button>
      <p className="app-footnote">
        ⓘ Illustrative shuttle arrivals for concept demo
      </p>
    </div>
  );
}
function Indoor({ go }) {
  return (
    <div className="screen-content indoor-screen">
      <div className="card handoff">
        <span className="icon-box magenta">
          <Icon name="door" size={25} />
        </span>
        <div>
          <label>OUTDOOR → INDOOR HANDOFF</label>
          <h2>Entering COM3</h2>
          <small>● Switching to indoor navigation</small>
        </div>
        <span>♧</span>
      </div>
      <div className="card floors">
        <div>
          <label>CURRENT FLOOR</label>
          <b>Level 1</b>
        </div>
        <span>›</span>
        <div>
          <label>DESTINATION FLOOR</label>
          <b>Level 1</b>
        </div>
      </div>
      <div className="section-title">
        <div>
          <h3>COM3 · Level 1</h3>
          <small>Entrance to Seminar Room 01-20</small>
        </div>
        <span className="badge purple">◈ INDOOR GUIDANCE</span>
      </div>
      <div className="map-card">
        <FloorMap />
      </div>
      <div className="card instruction">
        <span className="icon-box lavender">
          <Icon name="arrow" size={27} />
        </span>
        <div>
          <label>NEXT INSTRUCTION</label>
          <h3>Turn right after the lift lobby</h3>
          <small>18 m · Seminar Room 01-20</small>
        </div>
      </div>
      <button className="primary ar-start" onClick={() => go(3)}>
        <span className="icon-box">
          <Icon name="scan" />
        </span>
        <span>
          <b>Begin optional AR guidance</b>
          <small>Use your camera for visual directions</small>
        </span>
        <span>›</span>
      </button>
      <p className="app-footnote">
        ♧ 2D map guidance remains available throughout
      </p>
    </div>
  );
}
function AR({ distance, go, replay }) {
  return (
    <div className="ar-screen">
      <Corridor />
      <div className="ar-destination">
        <span className="icon-box orange-bg">
          <Icon name="pin" />
        </span>
        <div>
          <label>DESTINATION</label>
          <b>COM3 Seminar Room 01-20</b>
        </div>
        <button onClick={() => go(2)}>× Exit AR</button>
      </div>
      <span className="ar-kellton kellton">
        POWERED BY <b>∞ Kellton</b>
      </span>
      <div className="ar-turn">
        <span>←</span>
        <div>
          <label>NEXT TURN</label>
          <h2>
            {distance === 0
              ? "You have arrived"
              : `Turn left in ${Math.min(8, distance)} m`}
          </h2>
        </div>
      </div>
      <div className="ar-bottom">
        <div className="ar-stats">
          <div>
            <b>{distance} m</b>
            <label>REMAINING</label>
          </div>
          <div>
            <b>Level 1</b>
            <label>CURRENT FLOOR</label>
          </div>
        </div>
        <div className="mini-map">
          <svg viewBox="0 0 90 70">
            <path
              d="M9 9h60v13h12v34H43V42H9Z"
              fill="white"
              stroke="#c5d2dd"
              strokeWidth="2"
            />
            <path
              d="M19 55V28h45"
              stroke="#602681"
              fill="none"
              strokeWidth="5"
            />
            <circle
              cx="19"
              cy="55"
              r="6"
              fill="white"
              stroke="#602681"
              strokeWidth="3"
            />
            <Pin x={65} y={29} />
          </svg>
        </div>
      </div>
      <div className="ar-mode">▱ AR guidance · ♧ Level 1</div>
      {distance === 0 && (
        <button className="arrival-replay" onClick={replay}>
          Replay journey ↻
        </button>
      )}
    </div>
  );
}
export default function App() {
  const [screen, setScreen] = useState(0),
    [route, setRoute] = useState(0),
    [stop, setStop] = useState(0),
    [notify, setNotify] = useState(false),
    [starting, setStarting] = useState(false),
    [autoplay, setAutoplay] = useState(false),
    [paused, setPaused] = useState(false),
    [distance, setDistance] = useState(42);
  const go = (n) => {
    setScreen(n);
    setStarting(false);
  };
  const replay = () => {
    go(0);
    setRoute(0);
    setStop(0);
    setNotify(false);
    setDistance(42);
    setPaused(false);
  };
  useEffect(() => {
    document
      .querySelectorAll(".floor-map")
      .forEach((svg) =>
        paused ? svg.pauseAnimations() : svg.unpauseAnimations(),
      );
  }, [paused, screen]);
  useEffect(() => {
    if (!starting || paused) return;
    const id = setTimeout(() => go(1), 1200);
    return () => clearTimeout(id);
  }, [starting, paused]);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => {
        if (screen === 1) setStop((s) => Math.min(3, s + 1));
        if (screen === 3) setDistance((d) => Math.max(0, d - 2));
      },
      screen === 1 ? 2200 : 1100,
    );
    return () => clearInterval(id);
  }, [screen, paused]);
  useEffect(() => {
    if (!autoplay || paused) return;
    const id = setTimeout(
      () => {
        if (screen < 3) go(screen + 1);
        else {
          replay();
          setAutoplay(false);
        }
      },
      screen === 0 ? 6500 : screen === 1 ? 10000 : screen === 2 ? 9000 : 26000,
    );
    return () => clearTimeout(id);
  }, [autoplay, paused, screen]);
  return (
    <div className={"site " + (paused ? "paused" : "")}>
      <nav className="site-nav">
        <a className="wordmark" href="#">
          NUS<span>Map</span>
          <i />
        </a>
        <span className="nav-caption">CAMPUS, CONNECTED.</span>
        <span className="concept-label">
          <i /> Interactive concept prototype
        </span>
      </nav>
      <main>
        <div className="intro">
          <div className="eyebrow">A BETTER WAY TO FIND YOUR WAY</div>
          <h1>
            Experience NUSMap<span>.</span>
          </h1>
          <p>One seamless journey. From campus to classroom.</p>
        </div>
        <div className="demo-layout">
          <div className="phone-column">
            <div className="phone-shadow" />
            <div className="phone">
              <i className="side-button one" />
              <i className="side-button two" />
              <i className="side-button three" />
              <div className="phone-inner">
                <div className="status-bar">
                  <b>9:41</b>
                  <div className="dynamic-island" />
                  <span>▴ ▰ ▣</span>
                </div>
                {screen < 3 && (
                  <Header
                    screen={screen}
                    back={() => go(Math.max(0, screen - 1))}
                  />
                )}
                <div className="screen-viewport" key={screen}>
                  {screen === 0 ? (
                    <Route
                      {...{ route, setRoute, starting }}
                      start={() => setStarting(true)}
                    />
                  ) : screen === 1 ? (
                    <Shuttle {...{ stop, setStop, notify, setNotify, go }} />
                  ) : screen === 2 ? (
                    <Indoor go={go} />
                  ) : (
                    <AR {...{ distance, go, replay }} />
                  )}
                </div>
                <div className="home-indicator" />
              </div>
            </div>
            <div className="phone-caption">
              <span className="caption-dot" /> SIMULATED JOURNEY{" "}
              <span>UTown → COM3</span>
            </div>
          </div>
          <section className="journey-panel" aria-label="Journey controls">
            <div className="journey-heading">
              <span className="eyebrow">FOUR MOMENTS. ONE JOURNEY.</span>
              <h2>
                Every step,
                <br />
                connected.
              </h2>
              <p>
                Explore a campus journey that goes beyond the map. Try each
                feature in the prototype.
              </p>
            </div>
            <div className="features">
              {features.map(([name, desc], i) => (
                <button
                  key={name}
                  className={"feature " + (screen === i ? "active" : "")}
                  onClick={() => go(i)}
                  aria-current={screen === i ? "step" : undefined}
                >
                  <span className="feature-number">0{i + 1}</span>
                  <span>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </span>
                  <span className="feature-arrow"><Icon name="arrow" size={18}/></span>
                </button>
              ))}
            </div>
            <div className="controls">
              <button
                onClick={() => go(screen - 1)}
                disabled={screen === 0}
                aria-label="Previous feature"
              >
                ← <span>Previous</span>
              </button>
              <button
                className="next-control"
                onClick={() => (screen === 3 ? replay() : go(screen + 1))}
              >
                {screen === 3 ? "Replay journey" : "Next step"}{" "}
                <span>{screen === 3 ? "↻" : "→"}</span>
              </button>
              <button
                className="replay-control"
                onClick={replay}
                aria-label="Replay journey"
              >
                ↻
              </button>
            </div>
            <div className="playback">
              <button
                className={"autoplay " + (autoplay ? "enabled" : "")}
                onClick={() => {
                  setAutoplay(!autoplay);
                  setPaused(false);
                }}
                aria-pressed={autoplay}
              >
                <span className="toggle">
                  <i />
                </span>
                Autoplay demo
              </button>
              <button
                className="pause"
                onClick={() => setPaused(!paused)}
                aria-pressed={paused}
              >
                {paused ? "▷ Resume" : "Ⅱ Pause"}
              </button>
              <span aria-live="polite">0{screen + 1} / 04</span>
            </div>
            <div className="demo-note">
              <Icon name="scan" size={17} />
              <p>
                A glimpse of what’s possible.
                <br />
                <span>
                  Simulated routes, arrivals and AR. No live location or camera
                  access.
                </span>
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <span>
          NUSMap <i>·</i> Designed for a more connected campus.
        </span>
        <span>UNIVERSITY CONCEPT DEMONSTRATION</span>
      </footer>
    </div>
  );
}
