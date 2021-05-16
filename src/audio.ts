import * as MRE from '@microsoft/mixed-reality-extension-sdk';

let startSound : MRE.Sound;
let clickSound : MRE.Sound;

const DEBUG = false;

export function preload(assets: MRE.AssetContainer){
  startSound = assets.createSound('startSound', { uri: 'start.ogg' } );
  clickSound = assets.createSound('clickSound', { uri: 'click.ogg' } );
}

export function pollStarted(actor: MRE.Actor){
  actor.startSound(startSound.id, {
    volume: 0.2,
    looping: false,
    doppler: 0.0,
    spread: 0.7,
    rolloffStartDistance: 2.5
  });
}

export function pollTaken(actor: MRE.Actor){
  actor.startSound(startSound.id, {
    volume: 0.1,
    looping: false,
    doppler: 0.0,
    spread: 0.7,
    rolloffStartDistance: 2.5
  });
}

