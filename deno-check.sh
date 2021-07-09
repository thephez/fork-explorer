# Called via cron:
#  * * * * * /home/<user>/deno-check.sh >> cron-deno.log

if pgrep deno > /dev/null
then
  echo "Running $(date -u)"
else
  echo "Not running $(date -u)"
  cd /home/<user>/fork-explorer && nohup /home/<user>/.deno/bin/deno run --unstable --allow-net --allow-read --allow-write --allow-run index.ts &
  echo "Restart attempted..."
fi
