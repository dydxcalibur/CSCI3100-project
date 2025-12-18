interface LabelProps {
  label: string;
  variant: string;
}

export function Label({ label, variant }: LabelProps) {

    return (
      <div className="h-[84px] w-[240px] shadow-[4px_4px_10px_0px_rgba(102,102,102,0.25)]" data-name="label">
        <div className="relative h-full w-full">
          <div className="absolute bg-[#c3bb1a] bottom-[64.29%] left-[4.17%] right-0 top-0" />
          <div className="absolute bg-[#111111] bottom-0 left-[7.92%] right-0 top-[35.71%]" />
          <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[46.43%_38.33%_10.71%_15%] justify-center leading-[0] not-italic text-[24px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">{variant}</p>
          </div>
          <div className="absolute bg-[#101010] inset-[11.9%_62.08%_64.29%_7.92%]" />
          <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[14.29%_64.17%_64.29%_10.42%] justify-center leading-[0] not-italic text-[12px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre"> //{label}</p>
          </div>
          <div className="absolute bg-gradient-to-b bottom-[64.29%] from-[#53baff] left-0 right-[95.83%] to-[#99327d] top-0" />
        </div>
      </div>
    );
  }
