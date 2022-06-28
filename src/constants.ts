import {
    User,
    Songs,
    AudioFeatures,
    SongsAndAudioFeatures,
    Mood,
} from './types';

export const EmptyUser: User = {
    userName: '',
    imageURL: '',
};

export const EmptySongs: Songs[] = [
    {
        name: 'string',
        album: 'string',
        artist: 'string',
        imageURL: 'string',
        playedAt: 'string',
        id: 'string',
    },
];

export const EmptyAudioFeatures: AudioFeatures[] = [
    {
        danceability: 0,
        acousticness: 0,
        energy: 0,
        valence: 0,
        tempo: 0,
        key: 0,
    },
];

export const EmptySongsAndAudioFeatures: SongsAndAudioFeatures = {
    songs: EmptySongs,
    audioFeatures: EmptyAudioFeatures,
};

export const EmptyMood: Mood = {
    mood: '',
    emotionalFeatures: [
        {
            featureName: '',
            averageValue: 0,
            percentDifference: 0,
            percentDifferenceString: '',
        },
        {
            featureName: '',
            averageValue: 0,
            percentDifference: 0,
            percentDifferenceString: '',
        },
        {
            featureName: '',
            averageValue: 0,
            percentDifference: 0,
            percentDifferenceString: '',
        },
        {
            featureName: '',
            averageValue: 0,
            percentDifference: 0,
            percentDifferenceString: '',
        },
    ],
    standardFeatures: [
        {
            featureName: '',
            averageValue: 0,
        },
        {
            featureName: '',
            averageValue: 0,
            averageNotatedKey: '',
        },
    ],
};
