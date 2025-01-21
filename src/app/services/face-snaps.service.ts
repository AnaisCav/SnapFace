import { SnapType } from './../models/snap-type.type';
import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon doudou',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ),
    new FaceSnap(
      'Tommy',
      'Mon chat',
      'https://www.agria.fr/imagevault/publishedmedia/9vgy569fypmkernjg4x6/Orange_cat_laying_indoor.jpg',
      new Date(),
      148
    ).withLocation('Sur mon canapé'),
    new FaceSnap(
      'Henry',
      'Mon chien',
      'https://cdn.futura-sciences.com/sources/images/actu/esperance-vie-chiens-chiot-golden-retriever.jpg',
      new Date(),
      204
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
