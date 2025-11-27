export interface AdminAuthResponse {
  success: boolean;
  token?: string;
  expiresAt?: number;
  error?: string;
}

export async function adminLogin(password: string): Promise<AdminAuthResponse> {
  try {
    const response = await fetch('/api/admin-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Login failed',
    };
  }
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('/api/admin-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    return data.valid === true;
  } catch (error) {
    return false;
  }
}

export function setAdminSession(token: string, expiresAt: number): void {
  localStorage.setItem('admin_token', token);
  localStorage.setItem('admin_expires', expiresAt.toString());
}

export function getAdminSession(): { token: string; expiresAt: number } | null {
  const token = localStorage.getItem('admin_token');
  const expiresAt = localStorage.getItem('admin_expires');

  if (!token || !expiresAt) {
    return null;
  }

  const expires = parseInt(expiresAt, 10);
  if (Date.now() > expires) {
    clearAdminSession();
    return null;
  }

  return { token, expiresAt: expires };
}

export function clearAdminSession(): void {
  localStorage.removeItem('admin_token');
  localStorage.removeItem('admin_expires');
}

export function isAdminAuthenticated(): boolean {
  const session = getAdminSession();
  return session !== null;
}

