
//несколько интервьюеров 
class Developer {
  askQuestions() {
    console.log('Собеседую разработчиков');
  }
}

class Disigner {
  askQuestions() {
    console.log('Собеседую дизайнеров');
  }
}
//менеджер по подбору персонала
class HiringManager {  
    takeInterview() {
        const interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}

class DeveloperManager extends HiringManager {
    makeInterviewer() {
        return new Developer();
    }
}

class DisignerManager extends HiringManager {
    makeInterviewer() {
        return new Disigner();
    }
}
const devManager = new DeveloperManager();
devManager.takeInterview();

const disManager = new DisignerManager();
disManager.takeInterview();