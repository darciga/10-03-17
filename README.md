# What is it?

This repo is a small app write in Angularjs.</p>

# Running app
First install npm dependencies
```sh
$ npm install
```
Then install bower dependencies
```sh
$ bower install
```

# Getting started
## Dependencies
* Git (tested on version 2.5.0)
* Python (tested on version 2.7)

## Configuration

* Copy ```GitAutoDeploy.conf.json.example``` to ```GitAutoDeploy.conf.json```
* Modify ```GitAutoDeploy.conf.json``` to match your project setup
* Make sure that the ```pidfilepath``` path is writable for the user running the script, as well as any other path configured for your repositories.

## Running the application
```python GitAutoDeploy.py```

## Command line options

--daemon-mode (-d) Run in background (daemon mode)
--quiet (-q) Suppress all output
--ssh-keygen
--force
--config <path> Specify custom configuration file

## Start automatically on boot

### Crontab
The easiest way to configure your system to automatically start ```GitAutoDeploy.py``` after a reboot is through crontab. Open crontab in edit mode using ```crontab -e``` and add the following:

```@reboot /usr/bin/python /path/to/GitAutoDeploy.py --daemon-mode --quiet```

### Debian and Sys-V like init system.

* Copy file ```initfiles/debianLSBInitScripts/gitautodeploy``` to ```/etc/init.d/```
* Make it executable: ```chmod 755 /etc/init.d/gitautodeploy```
* Also you need to make ```GitAutoDeploy.py``` executable (if it isn't already): ```chmod 755 GitAutoDeploy.py```
* This init script assumes that you have ```GitAutoDeploy.py``` installed in ```/opt/Git-Auto-Deploy/``` and that the ```pidfilepath``` config option is set to ```/var/run/gitautodeploy.pid```. If this is not the case, edit the ```gitautodeploy``` init script and modify ```DAEMON```, ```PWD``` and ```PIDFILE```.
* Now you need to add the correct symbolic link to your specific runlevel dir to get the script executed on each start up. On Debian_Sys-V just do ```update-rc.d gitautodeploy defaults```


## Configure GitLab
* Go to your repository -> Settings -> Web hooks
* In "URL", enter your hostname and port (your-host:8001)
* Hit "Add Web Hook"

## Configure New Repo in GitAutoDeploy.conf.json
* "url": "https://gitlab.com/tingsystems/new-repo.git"
* "branch": "branch"
* "path": "/home/user/new-repo"
* "user": "user"
* "deploy": "echo updating static files && su - user -c '/home/user/scripts/update.sh'  && echo restarting name-app  && supervisorctl restart name-app"
