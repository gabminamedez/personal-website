"use client";

import { useFableReading } from "@/hooks/useFableReading";

export function ReadingPanel() {
  const { username, phase, display, error } = useFableReading();
  const isLoading = phase === "loading" && Boolean(username);

  if (isLoading) {
    return (
      <div className="panel">
        <div className="p-head">
          <span>READING</span>
          <span className="p-live">
            <span className="dot" />
            FABLE
          </span>
        </div>
        <div className="rd-cover" aria-hidden />
        <p className="rd-status">Loading…</p>
      </div>
    );
  }

  const book = display?.book;
  const coverUrl = book?.coverImageSmall || book?.coverImage;
  const year = new Date().getFullYear();
  const bookFooter = !username
    ? "SET FABLE USERNAME"
    : display?.source === "last_read"
      ? "LAST READ"
      : display?.finishedThisYear != null
        ? `BOOK ${display.finishedThisYear} / ${year}`
        : "CURRENTLY READING";
  const pagesFooter =
    book?.pageCount && book.pageCount > 0 ? `${book.pageCount} PAGES` : null;

  const coverContent = book ? (
    <>
      {display?.authorLine ? <span className="a">{display.authorLine}</span> : null}
      <span className="t">
        {book.title}
        {book.subtitle ? (
          <>
            <br />
            <span className="rd-subtitle">{book.subtitle}</span>
          </>
        ) : null}
      </span>
    </>
  ) : null;

  return (
    <div className="panel">
      <div className="p-head">
        <span>READING</span>
        <span className="p-live">
          <span className="dot" />
          FABLE
        </span>
      </div>

      {book?.url ? (
        <a
          className={`rd-cover${coverUrl ? " rd-cover--live" : ""}`}
          href={book.url}
          target="_blank"
          rel="noopener noreferrer"
          style={
            coverUrl ? { backgroundImage: `url(${coverUrl})` } : undefined
          }
        >
          {coverContent}
        </a>
      ) : (
        <div
          className={`rd-cover${coverUrl ? " rd-cover--live" : ""}`}
          style={
            coverUrl ? { backgroundImage: `url(${coverUrl})` } : undefined
          }
        >
          {coverContent}
        </div>
      )}

      {phase === "error" ? (
        <p className="rd-status">{error ?? "Could not load Fable."}</p>
      ) : null}
      {phase === "empty" && username ? (
        <p className="rd-status">No books on your Fable profile yet.</p>
      ) : null}
      {!username ? (
        <p className="rd-status">
          Add NEXT_PUBLIC_FABLE_USERNAME (your fable.co profile slug).
        </p>
      ) : null}

      {phase === "ready" ? (
        <div className="rd-foot mono-num">
          <span>{bookFooter}</span>
          {pagesFooter ? <span>{pagesFooter}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
