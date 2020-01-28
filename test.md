## Working on github... some commands that gave me a headache. Thanks git :) for this.

* GIT BASICS COMMANDS
- git init
- git add .
- git status
- git commit -am "whatever you want to write"
- git push origin/master

-----

### To work as a collaborator:

1. First you have to fork the target repository.
2. clone this on your local.
3. git remote add upstream <URL_TARGET_REPOSITORY>
4. git push origin/master // making push to your fetched repository (in other words your own repository on github)
5. Then, the pull request to the home repository (using the github interface)

6. Accept the new pull request (merge, squash?? ) learn.....

### To have changes in your local repository... type..
- git fetch origin master
- git merge origin/master

### To have changes on your local repository, but as a collaborator...
- git fetch upstream master
- git merge upstream/master

...Continue...
