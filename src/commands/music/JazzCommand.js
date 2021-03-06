import { Command } from 'discord.js-commando';
import MusicManager from '../../utils/MusicManager.js';

class JazzCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'jazz',
      group: 'music',
      memberName: 'jazz',
      description: 'Plays delicious jazz for 10 hours.'
    });
    this.musicManager = new MusicManager();
    this.song = 'https://www.youtube.com/watch?v=EAg4wNVvC-8';
  }

  run(message) {
    this.musicManager.play(message, this.song).catch((error) => {
      message.reply(error);
    });

    return;
  }
}

export default JazzCommand;
