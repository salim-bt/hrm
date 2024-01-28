// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { decodeJwt,jwtVerify } from 'jose';
import jwt from 'jsonwebtoken'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (!req.body.token) {
    res.status(400).json({ error: "token is required" });
    return;
  }

  // const {token} = req.body;

  // console.log(token);

  // const decoded = decodeJwt(token);
  // console.log(decoded.resource_access.hr.roles);

  // const date = new Date(decoded?.exp * 1000);
  // const verified = date > new Date("2021-09-01");
  // console.log(verified);
  // console.log(date.toLocaleString());
  res.status(200).json({ name: 'John Doe' })
}
