declare module 'rosbag' {
  export function open(filename: string): Promise<Bag>

  type BagReader = any
  type BagHeader = any
  type Connection = any
  type ChunkInfo = any
  type ReadOptions = any

  type Bag = {
    reader: BagReader
    header: BagHeader
    connections: { [conn: number]: Connection }
    chunkInfos: ChunkInfo[]
    startTime?: Time
    endTime?: Time
    open: () => Promise<void>
    readMessages: (
      opts: ReadOptions,
      callback: (msg: ReadResult<any>) => void,
    ) => Promise<void>
  }

  export class ReadResult<T> {
    topic: string
    message: T
    timestamp: Time
    data: Buffer
    chunkOffset: number
    totalChunks: number

    constructor(
      topic: string,
      message: T,
      timestamp: Time,
      data: Buffer,
      chunkOffset: number,
      totalChunks: number,
      freeze?: boolean,
    )
  }

  export type Callback<T> = ((error: Error, value?: void) => void) &
    ((error: null, value: T) => void)

  // Represents a timestamp based on the UNIX epoch (1970 Jan 1).
  // See also: http://wiki.ros.org/roscpp/Overview/Time
  export interface Time {
    // whole seconds
    sec: number
    // additional nanoseconds past the sec value
    nsec: number
  }

  export interface Filelike {
    read(offset: number, length: number, callback: Callback<Buffer>): void
    size(): number
  }
}
