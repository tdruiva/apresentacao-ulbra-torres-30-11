VIDEO = {
    //the css ID of the html5 video wrapper
    videoObject: '#video',
    //add a subtitle with a start/end time (can be decimals)
    addSubtitle: function(start, end, subtitle) {
        //add the subtitle
        Popcorn(this.videoObject).cue(start, function() {
            VIDEO.displaySubtitle(subtitle);
        });
        //remove the subtitle
        Popcorn(this.videoObject).cue(end, function () {
            VIDEO.removeSubtitle();
        });
    },
    //function to actually display the subtitle
    displaySubtitle: function(subtitle) {
        document.getElementById('substitles').innerHTML = '<p>' + subtitle + '</p>';
    },
    removeSubtitle: function () {
        document.getElementById('substitles').innerHTML = ' ';
    }
};

document.addEventListener("DOMContentLoaded", function() {

    VIDEO.addSubtitle(29.8, 32, 'a habilidade de trabalhar em conjunto');
    VIDEO.addSubtitle(32, 34.3, 'e formar e fortalecer esta comunidade');
    VIDEO.addSubtitle(34.3, 36, 'com a missão compartilhada');
    VIDEO.addSubtitle(36, 37.8, 'é a chave para o nosso sucesso');
    
    VIDEO.addSubtitle(54.8, 56.8, 'nós somos a causa');
    VIDEO.addSubtitle(56.9, 60, 'e a idéia de fazer as coisas.');
    VIDEO.addSubtitle(60, 64, 'O coração da Mozilla é uma comunidade global');
    VIDEO.addSubtitle(64, 65.8, 'com uma missão compartilhada.');
    
    VIDEO.addSubtitle(82, 87, 'muitos papéis, uma comunidade, um Mozilla.');
    VIDEO.addSubtitle(87, 90, 'Essa é a chave para o que nos fará bem-sucedidos');
    VIDEO.addSubtitle(90, 93, 'e ter o máximo impacto à medida que avançamos');
    VIDEO.addSubtitle(93, 95.8, 'para contruir a internet que mundo precisa.');
    
    VIDEO.addSubtitle(123.1, 126.5, 'Imagine. Construa. Ensine.');

}, false);