/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */

var model = {
  students: [
    {name: 'Slappy the Frog', missedDay: 12},
    {name: 'Lilly the Lizard', missedDay: 12},
    {name: 'Paulrus the Walrus', missedDay: 12},
    {name: 'Gregory the Goat', missedDay: 12},
    {name: 'Adam the Anaconda', missedDay: 12}
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

  decreaseMissedDay: function(student){
    student.missedDay -= 1;
    dayMissedView.render()
  }
};

//show days missed
var dayMissedView = {

  init: function(){
    var students = octupos.getStudents();
    var studentsAttendence = $('tr.student')
    for(i = 0; i < studentsAttendence.length; i++){
      var student = students[i];
      $('#' + studentsAttendence[i].id + ' input').change((function(student){
        return function(){
          if(this.checked){
            octupos.decreaseMissedDay(student)
          }
        }
      })(student));
    };
  },

  render: function(){
    var students = octupos.getStudents();
    var elem = $('td.missed-col')
    var i
    for(i = 0; i < students.length; i++){
      var missedDay = students[i].missedDay
      // constructs a new jQuery object from one element within index
      elem.eq(i).html(missedDay)
    };
  }
};

octupos.init()
