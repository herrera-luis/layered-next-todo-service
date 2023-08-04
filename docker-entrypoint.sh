#!/bin/sh

echo "NEXT_PUBLIC_API_BASE_URL=$API_BASE_URL" >> /app/.env

chmod +x /app/.env

./env.sh

# Hand off to the CMD
# cf https://stackoverflow.com/questions/42857897/execute-a-script-before-cmd
exec "$@"