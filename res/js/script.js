$(function () {
    // User object with random data
    var user = new User("Donald","Duck","27/03/1995","Computer Engineering","3.75")
    // Array of courses objects
    var courses = [
        new Courses("Robotics", 1, 78),
        new Courses("Algorithmics", 2, 75),
        new Courses("Computer Graphics", 3, 100),
        new Courses("Business Analysis", 1, 56),
    ];
    init();

    $('#courses-button').click(function (event) {
        $(event.target).removeClass('pill').addClass('pill active');
        $('#profile-button').removeClass('pill active').addClass('pill');
        $('#profile-container').removeClass('tab active').addClass('tab');
        $('#courses-container').removeClass('tab').addClass('tab active');
    });

    $('#profile-button').click(function (event) {
        $(event.target).removeClass('pill').addClass('pill active');
        $('#courses-button').removeClass('pill active').addClass('pill');
        $('#profile-container').removeClass('tab').addClass('tab active');
        $('#courses-container').removeClass('tab active').addClass('tab');
    });

    $('#add-course-button').click(function (event) {
        if ($('#add-course').hasClass('active')) {
            $('#add-course').removeClass('active');
        }
        else{
            $('#add-course').addClass('active');
        }
    });

    $('#save-course').click(function (event) {
        if (($('#title').val())&&($("#semester").val())&&($("#grade").val())) {
            courses.push(new Courses($("#title").val(),$("#semester").val(), $("#grade").val()));

            let i = courses.length-1;

            let tr = $("<tr></tr>");
            let nr = $("<td></td>").text(i+1);
            let course = $("<td></td>").text(courses[i].title);
            let semester = $("<td></td>").text(courses[i].semester);
            let grade = $("<td></td>").text(courses[i].grade);

            tr.append(nr);
            tr.append(course);
            tr.append(semester);
            tr.append(grade);

            // Adding table row to table
            $("#courses tbody").append(tr);

            $("#title").val("");
            $("#semester").val("");
            $("#grade").val("");

            user.gpa = getgpa();
            $("#gpa strong").text(user.gpa);

            $('#add-course').removeClass('active');
        }
    });

    $('#cancel-course').click(function (event) {
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");

        $('#add-course').removeClass('active');
    });

    function getgpa() {
        let pointSum = 0;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].grade>90){
                pointSum += 4;
            }
            else if (courses[i].grade>80){
                pointSum += 3;
            }
            else if (courses[i].grade>70){
                pointSum += 2;
            }
            else if (courses[i].grade>60){
                pointSum += 1;
            }
            else if (courses[i].grade>50){
                pointSum += 0.5;
            }
            else {
                pointSum += 0;
            }
        }
        return Math.round(pointSum/courses.length*100)/100;
    }

    function init() {
        // Personal information
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(getgpa());
        
        // Courses information
        for (let i = 0; i < courses.length; i++) {
            let tr = $("<tr></tr>");
            let nr = $("<td></td>").text(i+1);
            let course = $("<td></td>").text(courses[i].title);
            let semester = $("<td></td>").text(courses[i].semester);
            let grade = $("<td></td>").text(courses[i].grade);

            tr.append(nr);
            tr.append(course);
            tr.append(semester);
            tr.append(grade);

            // Adding table row to table
            $("#courses tbody").append(tr);
        }
    }
});