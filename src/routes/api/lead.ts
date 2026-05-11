import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

interface LeadData {
  salonName?: string;
  ownerName?: string;
  phone?: string;
  email?: string;
  city?: string;
  businessType?: string;
  numberOfStaff?: string;
  numberOfServices?: string;
  currentBookingSystem?: string;
  useOnlineBooking?: string;
  needOnlinePayments?: boolean;
  needFinancialReports?: boolean;
  preferredContact?: string;
  additionalComments?: string;
}

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      GET: async () =>
        Response.json({
          status: "ok",
          endpoint: "/api/lead",
          methods: ["POST"],
          description: "Salon lead submission endpoint",
        }),
      POST: async ({ request }) => {
        try {
          const data = (await request.json()) as LeadData;
          const required: (keyof LeadData)[] = [
            "salonName",
            "ownerName",
            "phone",
            "email",
            "city",
            "businessType",
            "numberOfStaff",
            "numberOfServices",
            "preferredContact",
          ];
          for (const f of required) {
            if (!data[f]) {
              return Response.json(
                { error: `Missing required field: ${f}` },
                { status: 400 },
              );
            }
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email!)) {
            return Response.json({ error: "Invalid email format" }, { status: 400 });
          }
          console.log("=== New Lead Submission ===", new Date().toISOString(), data);
          return Response.json({
            success: true,
            message: "Lead submitted successfully",
            leadId: `lead_${Date.now()}`,
          });
        } catch (e) {
          console.error("Lead error", e);
          return Response.json({ error: "Internal server error" }, { status: 500 });
        }
      },
    },
  },
});
