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
        [10] git config --global user.name yourname ==> this will edit the git configuration so as not to give an error when committing
        [11] git config --global user.email youremail ==> this will edit the git configuration so as not to give an error when committing

        [12] git branch ==> this will give you all the brancehs you have in the local repo on your PC [for example ==> branch]

        [13] git remote -v ==> this will get you the remoteName [for example ==> origin]
*/