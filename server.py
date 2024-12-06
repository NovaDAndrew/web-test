from flask import Flask, render_template
import psutil
import platform
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def system_status():
    system_info = {
        "os": platform.system(),
        "os_version": platform.version(),
        "architecture": platform.architecture()[0],
        "cpu_count": psutil.cpu_count(logical=True),
        "cpu_usage": psutil.cpu_percent(interval=1),
        "memory_total": round(psutil.virtual_memory().total / (1024 ** 3), 2),
        "memory_used": round(psutil.virtual_memory().used / (1024 ** 3), 2),
        "disk_total": round(psutil.disk_usage('/').total / (1024 ** 3), 2),
        "disk_used": round(psutil.disk_usage('/').used / (1024 ** 3), 2),
        "boot_time": datetime.fromtimestamp(psutil.boot_time()).strftime("%Y-%m-%d %H:%M:%S"),
        "network_info": psutil.net_if_addrs()
    }

    return render_template("system_status.html", system_info=system_info)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
