"use client";
import { Button } from "@rallly/ui/button";
import { CommandDialog } from "@rallly/ui/command";
import { useDialog } from "@rallly/ui/dialog";

import { TimeZoneCommand } from "@/components/time-zone-picker/time-zone-select";
import { usePreferences } from "@/contexts/preferences";
import { useDayjs } from "@/utils/dayjs";

export function TimezoneControl() {
  const { timeZone } = useDayjs();
  const { updatePreferences } = usePreferences();
  const dialog = useDialog();
  return (
    <>
      <Button
        variant="ghost"
        onClick={() => {
          dialog.trigger();
        }}
      >
        {timeZone}
      </Button>
      <CommandDialog {...dialog.dialogProps}>
        <TimeZoneCommand
          value={timeZone}
          onSelect={(newTimeZone) => {
            dialog.dismiss();
            updatePreferences({ timeZone: newTimeZone });
          }}
        />
      </CommandDialog>
    </>
  );
}
