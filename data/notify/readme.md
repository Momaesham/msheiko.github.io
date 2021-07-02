```bash
npm i nodemon --save-dev
npm i nodemon-notifier-cli --save-dev
```
create file `nodemon.json`
```json
{
  "events": {
    "start": "npx notify -t 'START' -m 'project Name ' --icon /projects/msheiko.github.io/data/notify/ok_2.png",
    "restart": "npx notify -t 'Restart' -m 'Project Name' --icon /projects/msheiko.github.io/data/notify/ok_2.png",
    "crash": "npx notify -t 'ERROR' -m 'Project Name' --icon /projects/msheiko.github.io/data/notify/error_2.png",
    "exit": "npx notify -t 'DONE' -m 'Project Name' --icon /projects/msheiko.github.io/data/notify/file.png"
  }
}
```