export interface MainTheme {
  colors: {
    bkg: {
      [key: string]: string;
    };
    txt: {
      [key: string]: string;
    };
    interactive: {
      primary: {
        [key: string]: string;
      };
    };
  };
  spacing: {
    [key: string]: number;
  };
  font: {
    size: {
      [key: string]: number;
    };
  };
}

export const mainTheme = {
  colors: {
    bkg: {
      page: '#F3F4F6',
      container: '#F9FAFB',
    },
    txt: {
      body: '#1F2937',
      description: '#9CA3AF',
    },
    interactive: {
      primary: {
        default: '#fff',
        hover: '#3B82F6',
        active: '#60A5FA',
        disabled: '#D1D5DB',
      },
    },
  },
  spacing: {
    xs: 0.25,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2,
  },
  font: {
    size: {
      h1: 2.5,
      h2: 2,
      h3: 1.8,
      h4: 1.3,
    },
  },
};

export default mainTheme;
