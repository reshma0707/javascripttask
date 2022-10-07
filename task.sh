
#!/bin/bash
PS3='choose option '
options=("Currently logged user" "Shell directory" "Home directory" "Os and version" "Users logged" "Current working dir" "List shells" "Hard disk info" "CPU info"
"Memory info" "File system info" "Current running process"  "Quit")
select choose in "${options[@]}"; do
    case $choose in
        "Currently logged user")
            echo "$USER";;
        "Shell directory")
            echo "$SHELL";;
        "Home directory")
             echo " $HOME" ;;
        "Os and version")
            cat /etc/*-release;;
         "Users logged")
            echo  $(users);;
         "Current working dir")
            echo  $(pwd);;
         "List shells")
            cat /etc/shells;;
         "Hard disk info")
            echo $(lshw);;
        "CPU info")
            cat /proc/cpuinfo;;
         "Memory info")
            echo $(free);;
        "File system info")
            cat /etc/fstab ;;
         "Current running process")
            echo $(ps -aux) ;;

          
       	"Quit")
	    echo "User requested exit"
	    exit
	    ;;
        *) echo "invalid option $REPLY";;
    esac
done
