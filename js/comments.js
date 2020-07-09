/*
    // the git language is called [markdown] ==> '.md' and it has it's own rules of writing 

    // to clone a repo ==> copy the repo link and go to the cmder ==> git clone clone-link.git

    --- Add Reset and Commit: 

        [1] git status filename==> checks if there are untracked files [they are not in the staging area] in the project
        [2] git add filename==> adds the project from the working directory to the staging area
        [3] git commit -m "message"==> delivers the project from the staging area to the local repo with the description message
        [4] git push remoteName branchName==> delivers the project from the local repo to the remote rrepo [git hub]
        [5] git fetch filename==> delivers the project back from the remote repo [github] to the local repo
        [6] git checkout filename==> delivers the project from the remote repo to the working directory
        [7] git merge filename==> delivers the project from the remote repo to the working directory
        [8] git reset head filename==> this unstages the file again from the staging area 
        [9] git add * ==> this will add all the project files to the staging area
        [10] git config --global user.name "yourname" ==> this will edit the git configuration so as not to give an error when committing

            // git config --global user.name ==> gets you the username 

        [11] git config --global user.email "youremail" ==> this will edit the git configuration so as not to give an error when committing

            // git config --global user.email ==> gets you the email 

        [12] git branch ==> this will give you all the brancehs you have in the local repo on your PC [for example ==> branch]

        [13] git remote -v ==> this will get you the remoteName [for example ==> origin]

    // note that you have to update the file on every change you make and then commit it otherwise iit will never push the repo to the remote name [origin]

        [14] git pull remoteName [origin] ==> this does the job of two commands ==> git fetch + git merge

            // gets you an updated version of the repo files added by collaporators

        [15] git config --list OR git config -l ==> gets you a list of all possible git configurations

        [16] git help config ==> redirects you to the manual of the git configurations

        [17] git config -l --show-origin ==> explains to you the place where the git gets it's configurations

        [18] git config --global --unset user.name ==> this will unset the value of the username in the git configurations

        [19] git config --global --edit ==> this will open the config editor file of the git configuratiosn in the editor on your PC so you can edit what you want

        [20] touch fileName.extension ==> this will make a new file

    // the public key allows you to access your github repos without the neewd to enter your login information [it's a made up key that you create]

        [21] ssh-keygen -t rsa -b 4096 -C "email@address" ==> this generates a public key 

            // ssh ==> secured shell
            // keygen ==> key generator
            // -t ==> type of algorithm
            // rsa ==> this is an algorithm type
            // -b ==> the size in bytes
            // 4096 byte
            // -C ==> the address to be attached to 

        // note that entering a password in the unix system doesn't even show the number of characters entered

        [22] cat ~/filedirectory ==> this gives you the contents of any file you enter

        [23] ssh -T git@github.com ==> this tests if the key you just created works or not ==> it worrks if it authoniticates you to theb repo [now I am connected directly to the github]

        [24] git init ==> this command initializes an empty repo in the same directorty

        [25] git remote add origin sshlink.git ==> this command adds a repo that's on your PC to github

        [26] git push -u origin master ==> this command pulls the repo from the PC and then pushes it to the git hub so this command gets the latest version of the repo first before it pushes it

        [27] git config --global alias.st status ==> this command will create an alias for he command git status
        
            // now I f I typed in the command line ==> git st ==> this will give me the result of 'git status'

            // the alias doesn't remove the original command it just creates a shortcut for it

            // git config --global alias.cm "commit -m" === commit -m "message"

            // we can add aliases through the config edit ==> git config --global --edit

        [28] git branch branchName ==> this command will create a new branch with the  name specified\

            // sometimes we need to create  a new branch for a task to edit and then make a pull request to the main branch 

        [29] git checkout branchName ==> to switch branches and navigate to another branch 

        [30] git branch -d branchName ==> this command will delete a branch 

        [31] git checkout -b branchName ==> this creates a new branch with the name specified and navigates to it directly

        [32] git branch -m newBranchName ==> this command will rename the branch 

        [33] git merge branchName ==> this command merges a created branch with the original branch [master]

            // note that you should merge before push if you have more than one branch  ==> add => commit => merge =>deleteOldBranch => push

            // note that ==> git branch -D branchName differs from git branch -d branchName ==> the '-d' makes a safe delete [ie: it will not delete the branch if it contains a file that hasn't been added or commited or if the branch itself hasn't been merged] while the '-D' deletes the branch anyway [ie: it will delete the branch whatever files in it]

        [34] git stash ==> this will store the files that you don't want to commit or push now and enabling you to complete the tasks you wanna do ==> [git status will give you no files exist]

        [44] git stash list ==> stash@{0}: WIP on master: e79719c Added A Style File [it will give yopu this if the stash contains files stored in it and it will give you nothing if it's the other way around]

        [45] git stash pop ==> this will get the fgiles out of the stash [this will drop the files from the stash]

            // note that this command will drop the files from the first stash box only [with the index 0]

            // note that this command deletes the stash box after dropping it's contents

            // if we wrote 'git stash list' afeter 'git stash pop' it will give you nothing because we dropped the files out of the stash

            // note that we can't add files to the stash before adding them to the staging area [git add]

            // every time that you put a files or files in the stash it will open a new stash box for them with a new id

        [46] git stash save "message" ==> this will store the files in the stash with writing the message in front of the file 

        [47] git stash apply ==> this will drop the contents of the first stash box only but it will never delete the stash box unlike the 'git stash pop'

        [48] git stash pop stash@{index} ==> this will drop the contents of the stash box with the index specifid and then delete the stash box

        [49] gist stash drop ==> this will delete the last stash box you created

            // note that this command deletes the stash box with it's contents

        [50] git stash drop stash@{index} ==> this will delete the stash box with the index specified

        [51] git stash show stash@{index} ==> displays the contents of the stash with the specified index

        [52] git stash clear ==> this  will delete all the stash boxes with their contents


*/