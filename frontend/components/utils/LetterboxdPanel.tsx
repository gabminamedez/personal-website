"use client";

import { formatLetterboxdDate } from "@/lib/letterboxd";
import { useLetterboxdLastFilm } from "@/hooks/useLetterboxdLastFilm";

export function LetterboxdPanel() {
  const { username, phase, display, error } = useLetterboxdLastFilm();
  const isLoading = phase === "loading" && Boolean(username);

  if (isLoading) {
    return (
      <div className="panel">
        <div className="p-head">
          <span>FILMS</span>
          <span className="p-live">
            <span className="dot" />
            LETTERBOXD
          </span>
        </div>
        <div className="rd-cover" aria-hidden />
        <p className="rd-status">Loading…</p>
      </div>
    );
  }

  const film = display?.film;
  const coverUrl = film?.posterUrl;
  const year = new Date().getFullYear();

  const footLeft = !username
    ? "SET LETTERBOXD USER"
    : film?.rewatch
      ? "REWATCH"
      : "LAST WATCHED";
  const footRight = film?.watchedDate
    ? formatLetterboxdDate(film.watchedDate)
    : display?.filmsThisYear != null
      ? `FILM ${display.filmsThisYear} / ${year}`
      : null;

  const coverContent = film ? (
    <>
      {film.ratingLine ? <span className="a">{film.ratingLine}</span> : null}
      <span className="t">
        {film.title}
        {film.year ? (
          <>
            <br />
            <span className="rd-subtitle">{film.year}</span>
          </>
        ) : null}
      </span>
    </>
  ) : null;

  return (
    <div className="panel">
      <div className="p-head">
        <span>FILMS</span>
        <span className="p-live">
          <span className="dot" />
          LETTERBOXD
        </span>
      </div>

      {film?.url ? (
        <a
          className={`rd-cover${coverUrl ? " rd-cover--live" : ""}`}
          href={film.url}
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
        <p className="rd-status">{error ?? "Could not load Letterboxd."}</p>
      ) : null}
      {phase === "empty" && username ? (
        <p className="rd-status">No watched films in your Letterboxd feed yet.</p>
      ) : null}
      {!username ? (
        <p className="rd-status">
          Add NEXT_PUBLIC_LETTERBOXD_USERNAME to your .env file.
        </p>
      ) : null}

      {phase === "ready" ? (
        <div className="rd-foot mono-num">
          <span>{footLeft}</span>
          {footRight ? <span>{footRight}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
