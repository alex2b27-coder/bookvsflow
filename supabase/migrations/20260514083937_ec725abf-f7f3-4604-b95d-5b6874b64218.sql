ALTER TABLE public.leads ADD COLUMN telegram text;
ALTER TABLE public.leads ALTER COLUMN email DROP NOT NULL;
ALTER TABLE public.leads ADD CONSTRAINT leads_email_or_telegram_required CHECK (
  (email IS NOT NULL AND length(trim(email)) > 0)
  OR (telegram IS NOT NULL AND length(trim(telegram)) > 0)
);