export default function BooksDivider() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg width="100%" viewBox="0 0 680 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bd-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#264C62" stopOpacity="0.6"/>
            <stop offset="30%"  stopColor="#514189" stopOpacity="0.8"/>
            <stop offset="50%"  stopColor="#E7650D" stopOpacity="1"/>
            <stop offset="70%"  stopColor="#E96511" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#11756C" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="bd-fade-l" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0F2137" stopOpacity="1"/>
            <stop offset="100%" stopColor="#0F2137" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="bd-fade-r" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#FBF7F0" stopOpacity="0"/>
            <stop offset="100%" stopColor="#FBF7F0" stopOpacity="1"/>
          </linearGradient>
        </defs>

        <rect x="0"   y="0" width="340" height="80" fill="#0F2137"/>
        <rect x="340" y="0" width="340" height="80" fill="#FBF7F0"/>

        <rect x="200" y="0" width="140" height="80" fill="url(#bd-fade-l)" opacity="0.6"/>
        <rect x="340" y="0" width="140" height="80" fill="url(#bd-fade-r)" opacity="0.6"/>

        <rect x="0" y="38" width="680" height="2" fill="url(#bd-grad)"/>
        <rect x="0" y="34" width="340" height="0.8" fill="#264C62" opacity="0.25"/>
        <rect x="340" y="34" width="340" height="0.8" fill="#11756C" opacity="0.15"/>

        <polygon points="340,31 347,40 340,49 333,40" fill="#E7650D"/>

        <circle cx="308" cy="39" r="2.5" fill="#514189" opacity="0.65"/>
        <circle cx="290" cy="39" r="1.8" fill="#514189" opacity="0.35"/>
        <circle cx="276" cy="39" r="1.2" fill="#264C62" opacity="0.2"/>

        <circle cx="372" cy="39" r="2.5" fill="#E96511" opacity="0.65"/>
        <circle cx="390" cy="39" r="1.8" fill="#11756C" opacity="0.35"/>
        <circle cx="404" cy="39" r="1.2" fill="#11756C" opacity="0.2"/>
      </svg>
    </div>
  );
}