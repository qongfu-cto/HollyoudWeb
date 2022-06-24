import React, { createContext, useContext, useMemo } from 'react';
import { UAParser } from 'ua-parser-js';
import { fullPageWidth } from 'utilities/utils';

interface ParserContextProps {
  parserData: {
    browser: {
      name: String;
      version: String;
    };
    cpu: String;
    device: {
      model: String;
      type: String;
      vendor: String;
    };
    engine: {
      name: String;
      version: String;
    };
    os: {
      name: String;
      version: String;
    };
  };
}

const ParserContext = createContext<ParserContextProps>(
  {} as ParserContextProps
);

/**
 * UseParserProvider()
 *
 * A function to load UA-Parser data.
 *
 * @returns browser.name - Name of the browser
 * @returns browser.version  - Version of the browser
 * @returns cpu - For IoT Devices, it returns the CPU architecture
 * @returns device.model - Model of the device (eq. iPhone)
 * @returns device.type -
 */
export const UseParserProvider = ({ children }: any) => {
  // const parser    =""
  // const browser   = ""
  // const cpu       = ""
  // const device    = ""
  // const engine    = ""
  // const os        = ""
  // const result    = ""
  const width = fullPageWidth();

  const parserInit = useMemo(() => {
    const parser = new UAParser();
    if (width && width > 768) {
      return {
        browser: parser.getBrowser(),
        cpu: parser.getCPU(),
        device: { model: undefined, type: undefined, vendor: undefined },
        engine: parser.getEngine(),
        os: parser.getEngine(),
        result: parser.getResult()
      };
    }
    return {
      browser: parser.getBrowser(),
      cpu: parser.getCPU(),
      device: parser.getDevice(),
      engine: parser.getEngine(),
      os: parser.getEngine(),
      result: parser.getResult()
    };
  }, [width]);

  // console.log('- - - - - - PARSER DATA - - - - - -');
  // console.log(
  //   `Browser: ${parserInit?.browser.name} ver. ${parserInit?.browser.version}`
  // );
  // console.log(`CPU: ${parserInit?.cpu.architecture}`);
  // console.log(
  //   `DEVICE: ${parserInit?.device.model}  |  Type: ${parserInit?.device.type}  |  Vendor: ${parserInit?.device.vendor}`
  // );
  // console.log(
  //   `ENGINE: ${parserInit?.engine.name} ver. ${parserInit?.engine.version}`
  // );
  // console.log(`OS: ${parserInit?.os.name} ver. ${parserInit?.os.version}`);
  // console.log('- - - - - - - - - - - - - - - - - -');

  const parserData: any = {
    browser: {
      name: parserInit?.browser.name,
      version: parserInit?.browser.version
    },
    cpu: parserInit?.cpu.architecture,
    device: {
      model: parserInit?.device.model,
      type: parserInit?.device.type,
      vendor: parserInit?.device.vendor
    },
    engine: {
      name: parserInit?.engine.name,
      version: parserInit?.engine.version
    },
    os: {
      name: parserInit?.os.name,
      version: parserInit?.os.version
    }
  };

  return (
    <ParserContext.Provider value={{ parserData }}>
      {children}
    </ParserContext.Provider>
  );
};

export function useParser() {
  const context = useContext(ParserContext);

  return context;
}
