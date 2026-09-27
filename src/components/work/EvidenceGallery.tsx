import { useId, useRef, useState } from "react";
import type { Evidence } from "../../types";
import { CloseIcon, ExpandIcon } from "../shared/Icons";

type Props = {
  evidence: Evidence[];
  label: string;
  enlargeLabel: string;
  closeLabel: string;
};

export function EvidenceGallery({ evidence, label, enlargeLabel, closeLabel }: Props) {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const captionId = useId();
  const current = evidence[active];

  if (!current) return null;

  const openDialog = () => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialogRef.current?.showModal();
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
  };

  const closeDialog = () => dialogRef.current?.close();

  return (
    <div className="evidence-gallery">
      <div className="evidence-gallery__topline">
        <span>{label}</span>
        <span aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(evidence.length).padStart(2, "0")}</span>
      </div>
      <figure className="evidence-gallery__preview">
        <img key={current.src} src={current.src} alt={current.alt} width={current.width} height={current.height} loading={active === 0 ? "eager" : "lazy"} decoding="async" />
        <figcaption>
          <span>{current.caption}</span>
          <button type="button" aria-haspopup="dialog" onClick={openDialog}><ExpandIcon />{enlargeLabel}</button>
        </figcaption>
      </figure>
      <div className="evidence-gallery__choices" role="group" aria-label={label}>
        {evidence.map((item, index) => (
          <button key={item.src} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
            <img src={item.src} alt="" width={item.width} height={item.height} loading="lazy" decoding="async" />
            <span>{item.caption}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="evidence-dialog"
        aria-labelledby={captionId}
        onClose={() => returnFocusRef.current?.focus()}
        onClick={(event) => event.target === event.currentTarget && closeDialog()}
      >
        <button ref={closeButtonRef} className="evidence-dialog__close" type="button" onClick={closeDialog} aria-label={closeLabel}><CloseIcon /></button>
        <figure>
          <img src={current.src} alt={current.alt} width={current.width} height={current.height} />
          <figcaption id={captionId}>{current.caption}</figcaption>
        </figure>
      </dialog>
    </div>
  );
}
