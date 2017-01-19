/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */

var model = {
  schoolDay: 12,
  students: [
    {name: 'Slappy the Frog', missedDay: 5},
    {name: 'Lilly the Lizard', missedDay: 3},
    {name: 'Paulrus the Walrus', missedDay: 6},
    {name: 'Gregory the Goat', missedDay: 6},
    {name: 'Adam the Anaconda', missedDay: 8}
  ]
}

var octupos = {
  init: function(){
    dayMissedView.init();
    dayMissedView.render()
  },

  getStudents: function(){
    return model.students
  },
};


//show days missed
var dayMissedView = {
  init: function(){
    var students = octupos.getStudents();
    var elem = $('td.missed-col')
    var i
    for(i = 0; i < students.length; i++){
      var missedDay = students[i].missedDay
      // constructs a new jQuery object from one element within index
      elem.eq(i).html(missedDay)
    };

    var studentsAttendence = $('tr.student')
    var a = $('#' + studentsAttendence[0].id + ' input')
    console.log(a);
  },

  render: function(){
    var students = octupos.getStudents();
    var studentsAttendence = $('tr.student')
    for(i = 0; i < studentsAttendence.length; i++){
      var student = students[i];
      $('#' + studentsAttendence[i].id + ' input').change((function(){
        console.log(student);
        return function(student){
          if(this.checked){
            console.log(student);
            student.missedDay -= 1
          }
        }
      })(student))
    };
  }
};

//show days attended
var checkboxVeiw = {
  init: function(){
    //get students row elements
    var elem = $('.student');
  },

  render: function(){

  }
}

octupos.init()
