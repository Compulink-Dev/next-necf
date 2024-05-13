// middleware/auth.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export async function checkAuth(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<boolean> {
    const session = await getSession({ req });

    if (!session) {
        res.writeHead(302, {
            Location: '/login',
        });
        res.end();
        return false;
    }

    return true;
}
