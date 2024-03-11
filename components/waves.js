import Wave from 'react-wavify'

export default function Waves() {
    return(
        <>
        <Wave
      stroke="#FFF"
      fill="#000"
      className="waves waves-1"
        paused={false}
        options={{
          height: 40,
          amplitude: 80,
          speed: 0.15,
          points: 6,
        }}
      />
       <Wave
      stroke="#FFF"
      fill="#000"
      className=" waves waves-2"
        paused={false}
        options={{
          height: 40,
          amplitude: 80,
          speed: 0.10,
          points: 6,
        }}
      />
        <Wave
      stroke="#FFF"
      fill="#000"
      className=" waves waves-3"
        paused={false}
        options={{
          height: 40,
          amplitude: 80,
          speed: 0.15,
          points: 9,
        }}
      />
      </>
    )
}