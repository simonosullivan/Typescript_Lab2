var arrayOfStrings;
var cnt = 0;
function addTask(task) {
    arrayOfStrings[cnt] = task;
    console.log(task + " has been added to array \n");
    cnt++;
    return cnt;
}
function listAllTasks() {
    for (var i = 0; i < arrayOfStrings.length; i++) {
        console.log(arrayOfStrings[i] + "\n");
    }
}
function deleteTask(task) {
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i] == task) {
            delete arrayOfStrings[i];
            console.log(arrayOfStrings[i] + " has been removed from array \n");
            break;
        }
    }
    cnt--;
    return cnt;
}
