export interface ProfileData {
    id: string;
    title: string;
    descriptionShort: string;
    type: string;
    profileImages: { imgUrl: string }[] | null;
  }
  
  export interface CertificateData {
    id: string;
    snippet: {
      thumbnails: {
        small: {
          url: string;
        };
      };
    };
    url: string
  }