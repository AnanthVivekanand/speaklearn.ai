const FormData = require('form-data');
const { Configuration, OpenAIApi } = require("openai");

export class Speaking {
    static language = ""
    public static async getLanguage(message : string) {
        // AIzaSyAvg4NhVnHVhLaIvdUdTmIzkEFJiWinALk
        // AIzaSyD60s7duQa4gIdGBO_Gqp1SKZ1NCcoyBWo
        if (this.language == "") {
            let ret = await fetch("https://translation.googleapis.com/language/translate/v2/detect?key=AIzaSyAvg4NhVnHVhLaIvdUdTmIzkEFJiWinALk", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ q: message })
            })
            .then(response => response.json())
            console.log(ret)
            
                let languageCode = ret.data.detections[0][0].language
                console.log(languageCode)
                let bcp47Code;

                if (languageCode === "ja") {
                bcp47Code = "ja-JP";
                } else if (languageCode === "en") {
                bcp47Code = "en-US";
                } else if (languageCode === "fr") {
                bcp47Code = "fr-FR";
                } else if (languageCode === "es") {
                bcp47Code = "es-ES";
                } else if (languageCode === "de") {
                bcp47Code = "de-DE";
                } else if (languageCode === "ru") {
                bcp47Code = "ru-RU";
                } else {
                bcp47Code = "en-US"; // handle other cases or unknown language codes
                }
                this.language = bcp47Code as any;
                return bcp47Code;
        
        } else {
            return this.language;
        }
        return 'en-US'
    }

    public static async speak(message : string) {
    console.log(await this.getLanguage(message))
    const payload = {
      input: {text: message},
      voice: {languageCode: await this.getLanguage(message), ssmlGender: 'FEMALE'},
      audioConfig: {audioEncoding: 'MP3'}
    };

    fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyBczMHS3ykiLW2e5MsOOVYq2iK3H4uJZe0", {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => { console.log(response); return response; })
    .then(data => data.audioContent)
    .then(audio => {
      (document.getElementById("audioContainer") as any).innerHTML = `<audio id="audio" autoplay> 
      <source src="data:audio/mp3;base64,${audio}" type="audio/mpeg">
    </audio>
    `
    });
  }

  // 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

  public static async listen(audioBlob : Blob) {
    

  }
    
}