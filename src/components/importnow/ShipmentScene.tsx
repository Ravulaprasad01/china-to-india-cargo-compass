import { AnimatePresence, motion } from "framer-motion";

function FactoryScene() {
  return (
    <svg viewBox="0 0 560 300" className="h-full w-full" aria-label="Sourcing verified factories in China">
      <defs>
        <linearGradient id="sky-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--maritime)" />
          <stop offset="100%" stopColor="var(--maritime)" stopOpacity="0.82" />
        </linearGradient>
      </defs>
      <rect width="560" height="300" fill="url(#sky-1)" />
      {/* Subtle radar rings */}
      {[48, 86, 124].map((r, i) => (
        <motion.circle
          key={r}
          cx="280"
          cy="146"
          r={r}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.2"
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{ opacity: [0.45, 0.08, 0.45], scale: [0.95, 1.06, 0.95] }}
          transition={{ duration: 2.8, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Ground */}
      <rect x="0" y="232" width="560" height="68" fill="currentColor" fillOpacity="0.06" />
      <line x1="0" y1="232" x2="560" y2="232" stroke="currentColor" strokeOpacity="0.18" />
      {/* Sawtooth factory silhouette */}
      <path
        d="M110 232 V154 L165 130 V154 L220 130 V154 L275 130 V154 L330 130 V232 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      {/* Showroom / office wing */}
      <rect x="330" y="114" width="120" height="118" rx="4" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.3" />
      {/* Lit factory windows */}
      {[130, 178, 226, 274].map((x, idx) => (
        <motion.rect
          key={x}
          x={x}
          y="174"
          width="28"
          height="22"
          rx="2"
          fill="var(--seal-gold)"
          animate={{ opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 2.4, delay: idx * 0.3, repeat: Infinity }}
        />
      ))}
      {[134, 162, 190].map((y) => (
        <rect key={y} x="348" y={y} width="84" height="10" rx="2" fill="currentColor" fillOpacity="0.22" />
      ))}
      {/* Verified factory badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <rect x="192" y="54" width="176" height="44" rx="22" fill="var(--maritime)" stroke="var(--primary)" strokeWidth="1.5" />
        <circle cx="216" cy="76" r="10" fill="var(--primary)" />
        <path d="M212 76 L215 79 L221 72" fill="none" stroke="var(--primary-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="235" y="73" fill="var(--maritime-foreground)" fontSize="11" fontWeight="700" fontFamily="monospace">
          3 FACTORIES MATCHED
        </text>
        <text x="235" y="87" fill="var(--maritime-muted)" fontSize="9.5" fontFamily="monospace">
          YIWU · FOSHAN · SHENZHEN
        </text>
      </motion.g>
    </svg>
  );
}

function InspectionScene() {
  return (
    <svg viewBox="0 0 560 300" className="h-full w-full" aria-label="Factory quality inspection and sample approval">
      <rect width="560" height="300" fill="var(--maritime)" />
      {/* Conveyor belt */}
      <rect x="44" y="210" width="472" height="16" rx="8" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.28" />
      {[72, 132, 192, 252, 312, 372, 432, 492].map((cx) => (
        <circle key={cx} cx={cx} cy="218" r="4" fill="currentColor" fillOpacity="0.35" />
      ))}
      {/* Moving cartons on conveyor */}
      {[0, 1, 2].map((idx) => (
        <motion.g
          key={idx}
          initial={{ x: -80 + idx * 145 }}
          animate={{ x: [idx * 145 - 60, idx * 145 + 110] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
        >
          <rect x="70" y="156" width="66" height="54" rx="4" fill="var(--seal-gold)" fillOpacity="0.22" stroke="var(--seal-gold)" strokeWidth="1.5" />
          <line x1="70" y1="176" x2="136" y2="176" stroke="var(--seal-gold)" strokeOpacity="0.45" />
          <rect x="96" y="156" width="14" height="20" fill="var(--seal-gold)" fillOpacity="0.4" />
        </motion.g>
      ))}
      {/* Overhead QC scanner arch */}
      <path d="M225 210 V96 H335 V210" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="5" />
      <rect x="242" y="88" width="76" height="16" rx="4" fill="var(--primary)" />
      {/* Sweeping laser scan beam */}
      <motion.polygon
        points="250,104 310,104 334,208 226,208"
        fill="var(--primary)"
        animate={{ opacity: [0.08, 0.28, 0.08] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="234"
        x2="326"
        stroke="var(--primary)"
        strokeWidth="2"
        animate={{ y1: [115, 200, 115], y2: [115, 200, 115] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Live video call pill */}
      <rect x="356" y="34" width="166" height="50" rx="12" fill="var(--maritime)" stroke="var(--maritime-border)" strokeWidth="1.2" />
      <motion.circle
        cx="374"
        cy="54"
        r="4.5"
        fill="var(--whatsapp)"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <text x="386" y="57" fill="var(--maritime-foreground)" fontSize="10.5" fontWeight="700" fontFamily="monospace">
        LIVE SAMPLE CALL
      </text>
      <text x="372" y="73" fill="var(--maritime-muted)" fontSize="9.5" fontFamily="monospace">
        100% QC PHOTO REPORT
      </text>
    </svg>
  );
}

function CraneLoadingScene() {
  return (
    <svg viewBox="0 0 560 300" className="h-full w-full" aria-label="Gantry crane loading shipping container onto cargo ship at Shanghai port">
      <rect width="560" height="300" fill="var(--maritime)" />
      {/* Quay wall */}
      <rect x="0" y="218" width="215" height="82" fill="currentColor" fillOpacity="0.12" />
      <line x1="0" y1="218" x2="215" y2="218" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      {/* Stacked dock containers */}
      <rect x="26" y="188" width="58" height="30" rx="2" fill="var(--seal-gold)" fillOpacity="0.35" stroke="var(--seal-gold)" />
      <rect x="88" y="188" width="58" height="30" rx="2" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="26" y="156" width="58" height="30" rx="2" fill="var(--primary)" fillOpacity="0.45" stroke="var(--primary)" />

      {/* Giant red Shanghai gantry crane */}
      <line x1="158" y1="218" x2="158" y2="54" stroke="var(--primary)" strokeWidth="7" />
      <line x1="196" y1="218" x2="196" y2="54" stroke="var(--primary)" strokeWidth="7" />
      <line x1="126" y1="74" x2="438" y2="74" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
      <line x1="176" y1="42" x2="412" y2="74" stroke="var(--primary)" strokeWidth="2.5" strokeOpacity="0.75" />
      <line x1="176" y1="42" x2="132" y2="74" stroke="var(--primary)" strokeWidth="2.5" strokeOpacity="0.75" />

      {/* Animated crane trolley + lowering container */}
      <motion.g
        animate={{ x: [0, 128, 128, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.78, 1] }}
      >
        <rect x="196" y="70" width="32" height="12" rx="2" fill="var(--maritime-foreground)" />
        <motion.line
          x1="205"
          y1="82"
          x2="205"
          stroke="var(--maritime-muted)"
          strokeWidth="1.5"
          animate={{ y2: [118, 118, 166, 118] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.74, 1] }}
        />
        <motion.line
          x1="219"
          y1="82"
          x2="219"
          stroke="var(--maritime-muted)"
          strokeWidth="1.5"
          animate={{ y2: [118, 118, 166, 118] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.74, 1] }}
        />
        <motion.g
          animate={{ y: [0, 0, 48, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.74, 1] }}
        >
          <rect x="176" y="118" width="72" height="32" rx="3" fill="var(--primary)" stroke="var(--maritime-foreground)" strokeWidth="1.5" />
          <text x="212" y="138" textAnchor="middle" fill="var(--primary-foreground)" fontSize="9" fontWeight="700" fontFamily="monospace">
            IMPN-40HC
          </text>
        </motion.g>
      </motion.g>

      {/* Cargo ship hull docked beside quay */}
      <path d="M236 226 H520 L496 258 H252 Z" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
      <rect x="448" y="170" width="46" height="56" rx="2" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="456" y="180" width="30" height="8" rx="1" fill="var(--seal-gold)" fillOpacity="0.7" />
      {/* Already loaded containers on ship */}
      <rect x="262" y="198" width="56" height="28" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="382" y="198" width="56" height="28" rx="2" fill="var(--seal-gold)" fillOpacity="0.32" stroke="var(--seal-gold)" />
      {/* Water line */}
      <motion.path
        d="M215 256 Q 260 248 305 256 T 395 256 T 485 256 T 575 256"
        fill="none"
        stroke="var(--maritime-muted)"
        strokeOpacity="0.45"
        strokeWidth="2"
        animate={{ x: [0, -28, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function OceanVoyageScene() {
  return (
    <svg viewBox="0 0 560 300" className="h-full w-full" aria-label="Container ship sailing from Shanghai to India across ocean waves">
      <rect width="560" height="300" fill="var(--maritime)" />
      {/* Drifting horizon clouds */}
      <motion.g animate={{ x: [0, -70, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} opacity="0.18">
        <rect x="82" y="54" width="68" height="14" rx="7" fill="currentColor" />
        <rect x="348" y="42" width="92" height="16" rx="8" fill="currentColor" />
      </motion.g>

      {/* Nautical telemetry HUD */}
      <rect x="24" y="24" width="218" height="44" rx="10" fill="var(--maritime)" stroke="var(--maritime-border)" />
      <text x="38" y="43" fill="var(--primary)" fontSize="9.5" fontWeight="700" fontFamily="monospace">
        VESSEL AT SEA · 18.4 KTS
      </text>
      <text x="38" y="58" fill="var(--maritime-muted)" fontSize="9.5" fontFamily="monospace">
        SHANGHAI → MALACCA → CHENNAI
      </text>

      {/* Sailing container vessel */}
      <motion.g
        animate={{ y: [0, -6, 0, 4, 0], rotate: [0, -1.2, 0, 1, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "280px", originY: "205px" }}
      >
        {/* Wake foam lines */}
        <motion.line
          x1="418"
          y1="214"
          x2="516"
          y2="214"
          stroke="var(--maritime-foreground)"
          strokeOpacity="0.35"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
        {/* Ship hull pointing left toward India */}
        <path d="M126 190 H428 L412 224 H158 L126 190 Z" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.6" />
        <path d="M138 206 H420" stroke="var(--primary)" strokeWidth="4" />
        {/* Bridge tower */}
        <rect x="358" y="122" width="44" height="68" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.45" />
        <rect x="366" y="132" width="28" height="10" rx="1.5" fill="var(--seal-gold)" fillOpacity="0.85" />
        {/* Stacked containers */}
        <rect x="174" y="164" width="54" height="26" rx="2" fill="var(--primary)" />
        <rect x="232" y="164" width="54" height="26" rx="2" fill="var(--seal-gold)" fillOpacity="0.7" />
        <rect x="290" y="164" width="54" height="26" rx="2" fill="currentColor" fillOpacity="0.32" />
        <rect x="192" y="136" width="54" height="26" rx="2" fill="currentColor" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.45" />
        <rect x="250" y="136" width="54" height="26" rx="2" fill="var(--primary)" fillOpacity="0.85" />
      </motion.g>

      {/* Multi-layer rolling ocean waves */}
      <motion.path
        d="M-60 226 Q 0 212 60 226 T 180 226 T 300 226 T 420 226 T 540 226 T 660 226 V300 H-60 Z"
        fill="currentColor"
        fillOpacity="0.1"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M-60 244 Q 10 232 80 244 T 220 244 T 360 244 T 500 244 T 640 244 V300 H-60 Z"
        fill="currentColor"
        fillOpacity="0.16"
        animate={{ x: [0, -64, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function CustomsPortScene() {
  return (
    <svg viewBox="0 0 560 300" className="h-full w-full" aria-label="Indian port customs and GST clearance">
      <rect width="560" height="300" fill="var(--maritime)" />
      <rect x="0" y="226" width="560" height="74" fill="currentColor" fillOpacity="0.08" />
      <line x1="0" y1="226" x2="560" y2="226" stroke="currentColor" strokeOpacity="0.25" />

      {/* Customs inspection gantry */}
      <path d="M162 226 V92 H398 V226" fill="none" stroke="currentColor" strokeOpacity="0.38" strokeWidth="8" />
      <rect x="196" y="76" width="168" height="24" rx="5" fill="var(--maritime)" stroke="var(--maritime-border)" />
      <text x="280" y="92" textAnchor="middle" fill="var(--maritime-foreground)" fontSize="10" fontWeight="700" fontFamily="monospace">
        INDIAN PORT CUSTOMS
      </text>

      {/* Container passing through customs bay */}
      <rect x="206" y="168" width="148" height="58" rx="4" fill="var(--primary)" fillOpacity="0.88" stroke="var(--maritime-foreground)" strokeWidth="1.5" />
      <text x="280" y="201" textAnchor="middle" fill="var(--primary-foreground)" fontSize="11" fontWeight="700" fontFamily="monospace">
        IMPN-40HC · DUTY & GST
      </text>

      {/* Sweeping green clearance beam */}
      <motion.rect
        y="102"
        width="16"
        height="122"
        fill="var(--whatsapp)"
        fillOpacity="0.28"
        animate={{ x: [184, 360, 184] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cleared stamp badge */}
      <motion.g
        initial={{ scale: 1.25, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <rect x="336" y="114" width="176" height="44" rx="10" fill="var(--maritime)" stroke="var(--whatsapp)" strokeWidth="1.8" />
        <circle cx="358" cy="136" r="9" fill="var(--whatsapp)" />
        <path d="M354 136 L357 139 L363 132" fill="none" stroke="var(--whatsapp-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="374" y="133" fill="var(--whatsapp)" fontSize="10" fontWeight="700" fontFamily="monospace">
          CUSTOMS CLEARED
        </text>
        <text x="374" y="147" fill="var(--maritime-muted)" fontSize="9" fontFamily="monospace">
          RELEASED FOR TRUCKING
        </text>
      </motion.g>
    </svg>
  );
}

function DoorDeliveryScene() {
  return (
    <svg viewBox="0 0 560 300" className="h-full w-full" aria-label="Container truck arriving at customer warehouse in India">
      <rect width="560" height="300" fill="var(--maritime)" />
      {/* Road */}
      <rect x="0" y="222" width="560" height="78" fill="currentColor" fillOpacity="0.09" />
      <motion.line
        x1="0"
        y1="254"
        x2="560"
        y2="254"
        stroke="var(--seal-gold)"
        strokeOpacity="0.45"
        strokeWidth="3"
        strokeDasharray="24 20"
        animate={{ strokeDashoffset: [0, 44] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      />

      {/* Customer warehouse / destination building on right */}
      <path d="M376 222 V132 L448 104 L520 132 V222 Z" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="414" y="162" width="68" height="60" rx="3" fill="var(--maritime)" stroke="var(--maritime-border)" />
      <text x="448" y="148" textAnchor="middle" fill="var(--maritime-foreground)" fontSize="9.5" fontWeight="700" fontFamily="monospace">
        YOUR DOOR
      </text>
      {/* Pulsing destination pin */}
      <motion.circle
        cx="448"
        cy="82"
        r="12"
        fill="var(--whatsapp)"
        animate={{ scale: [1, 1.35, 1], opacity: [0.75, 0.2, 0.75] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="448" cy="82" r="6" fill="var(--whatsapp)" />

      {/* Animated container truck arriving */}
      <motion.g
        initial={{ x: -160 }}
        animate={{ x: [0, 48, 48] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: [0.22, 1, 0.36, 1], times: [0, 0.65, 1] }}
      >
        {/* Container trailer */}
        <rect x="78" y="146" width="154" height="58" rx="4" fill="var(--primary)" stroke="var(--maritime-foreground)" strokeWidth="1.5" />
        <text x="155" y="179" textAnchor="middle" fill="var(--primary-foreground)" fontSize="11" fontWeight="700" fontFamily="monospace">
          IMPORTNOW · DELIVERED
        </text>
        {/* Truck cab */}
        <path d="M236 164 H274 L294 184 V208 H236 Z" fill="currentColor" fillOpacity="0.32" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" />
        <path d="M248 172 H270 L282 184 H248 Z" fill="var(--seal-gold)" fillOpacity="0.75" />
        {/* Chassis */}
        <rect x="74" y="204" width="222" height="8" rx="2" fill="currentColor" fillOpacity="0.45" />
        {/* Wheels */}
        {[106, 140, 264].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="216" r="12" fill="var(--maritime)" stroke="var(--maritime-foreground)" strokeWidth="2.5" />
            <circle cx={cx} cy="216" r="4" fill="var(--primary)" />
          </g>
        ))}
      </motion.g>
    </svg>
  );
}

export function ShipmentScene({ step }: { step: number }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-maritime-border/80 bg-maritime">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          {step === 1 && <FactoryScene />}
          {step === 2 && <InspectionScene />}
          {step === 3 && <CraneLoadingScene />}
          {step === 4 && <OceanVoyageScene />}
          {step === 5 && <CustomsPortScene />}
          {step === 6 && <DoorDeliveryScene />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}