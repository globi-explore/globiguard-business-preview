import React, {FormEvent, ReactNode, useEffect, useState} from 'react';

const PREVIEW_SESSION_KEY = 'gg-business-preview-auth-v1';
const PASSWORD_HASH =
  '4da77e240d6a4dc3f2eaae856124523c7aa2dbdc065133b1d70a7145428add07';

async function sha256(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value);
  const buffer = await window.crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  const [status, setStatus] = useState<'checking' | 'locked' | 'ready'>(
    'checking',
  );
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setStatus(
      window.sessionStorage.getItem(PREVIEW_SESSION_KEY) === 'ok'
        ? 'ready'
        : 'locked',
    );
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hash = await sha256(password);

    if (hash === PASSWORD_HASH) {
      window.sessionStorage.setItem(PREVIEW_SESSION_KEY, 'ok');
      setStatus('ready');
      setPassword('');
      setError('');
      return;
    }

    setError('Wrong password.');
  }

  if (status !== 'ready') {
    return (
      <div className="previewGate">
        <div className="previewGateCard">
          <p className="previewGateEyebrow">GlobiGuard</p>
          <h1 className="previewGateTitle">Strategy preview</h1>
          <p className="previewGateText">
            This is a temporary read-only preview for internal review. Enter the
            shared password to continue.
          </p>
          <form className="previewGateForm" onSubmit={handleSubmit}>
            <input
              autoFocus
              className="previewGateInput"
              type="password"
              value={password}
              placeholder="Preview password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="previewGateButton" type="submit">
              Open preview
            </button>
            {status === 'checking' ? null : error ? (
              <div className="previewGateError">{error}</div>
            ) : null}
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="previewBanner">
        <strong>Read-only preview</strong>
        <span>Temporary GitHub Pages share for co-founder review.</span>
      </div>
      {children}
    </>
  );
}
