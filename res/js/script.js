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

    function init() {
        // Personal information
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);
        
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