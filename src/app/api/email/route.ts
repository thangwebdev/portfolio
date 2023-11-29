import { type NextRequest } from "next/server";
import sendMail from "~/utils/sendmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return Response.json(
        { status: 400, message: "Field must not be empty" },
        {
          status: 400,
        }
      );
    }
    const toEmail = process.env.EMAIL || "vothang100401@gmail.com";
    const subject = `[Portfolio] - Lời nhắn mới dành cho bạn`;
    const content = `
      <div>
        <h1
          style="fontSize: 32px; text-align: center; margin-bottom: 40px;"
        >
          Một liên hệ mới
        </h1>
        <p>Tên liên hệ: ${name}</p>
        <p>Email liên hệ: ${email}</p>
        <p>Nội dung: ${message}</p>
      </div>
    `;
    await sendMail(toEmail, subject, content);
    return Response.json({ name, email, message });
  } catch (error) {
    return Response.json(
      { status: 500, message: "Server error" },
      {
        status: 500,
      }
    );
  }
}
