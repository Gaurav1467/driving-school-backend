const mongoose = require('mongoose');

const questionsToInsert = [
    {
        question_data: 'What does a flashing red traffic light indicate?',
        question_type: 'Traffic Signals',
        answer_key: 'Stop and yield to all other traffic',
        option_one: 'Proceed with caution',
        option_two: 'Stop and yield to all other traffic',
        option_three: 'Speed up to clear the intersection',
        option_four: 'Ignore the light and proceed',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What does a solid white line on the road indicate?',
        question_type: 'Road Markings',
        answer_key: 'Indicates the right edge of the roadway',
        option_one: 'Indicates the left edge of the roadway',
        option_two: 'No passing zone',
        option_three: 'Parking zone',
        option_four: 'Indicates the right edge of the roadway',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter black ice on the road?',
        question_type: 'Safety Measures',
        answer_key: 'Reduce speed and avoid sudden maneuvers',
        option_one: 'Speed up to gain traction',
        option_two: 'Slam on the brakes',
        option_three: 'Increase speed and steer sharply',
        option_four: 'Reduce speed and avoid sudden maneuvers',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the correct procedure for changing lanes on a highway?',
        question_type: 'Highway Driving',
        answer_key: 'Check mirrors, signal, check blind spot, and change lanes',
        option_one: 'Change lanes without signaling',
        option_two: 'Check blind spot, then signal and change lanes',
        option_three: 'Signal, then change lanes immediately',
        option_four: 'Check mirrors, signal, check blind spot, and change lanes',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to hydroplane?',
        question_type: 'Emergency Situations',
        answer_key: 'Ease off the gas and steer straight',
        option_one: 'Accelerate to regain control',
        option_two: 'Brake firmly to slow down',
        option_three: 'Turn the steering wheel sharply',
        option_four: 'Ease off the gas and steer straight',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you miss your exit on a highway?',
        question_type: 'Highway Driving',
        answer_key: 'Continue to the next exit',
        option_one: 'Stop and reverse on the shoulder',
        option_two: 'Make a U-turn across the median',
        option_three: 'Stop in the lane and signal for help',
        option_four: 'Continue to the next exit',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the proper way to approach a roundabout?',
        question_type: 'Roundabout Navigation',
        answer_key: 'Yield to traffic inside the roundabout and enter when safe',
        option_one: 'Speed up to merge into traffic',
        option_two: 'Honk your horn to alert other drivers',
        option_three: 'Come to a complete stop before entering',
        option_four: 'Yield to traffic inside the roundabout and enter when safe',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a pedestrian crossing the road?',
        question_type: 'Pedestrian Safety',
        answer_key: 'Stop and yield the right-of-way',
        option_one: 'Continue driving without stopping',
        option_two: 'Honk your horn to warn the pedestrian',
        option_three: 'Speed up to pass the pedestrian quickly',
        option_four: 'Stop and yield the right-of-way',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a blind spot?',
        question_type: 'Vehicle Safety',
        answer_key: 'Area not visible in mirrors, requiring a shoulder check before changing lanes',
        option_one: 'Area where vehicles are always visible',
        option_two: 'Area where pedestrians are always visible',
        option_three: 'Area where road signs are located',
        option_four: 'Area not visible in mirrors, requiring a shoulder check before changing lanes',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What does a yellow diamond-shaped sign with black symbols indicate?',
        question_type: 'Road Signs',
        answer_key: 'Warning sign',
        option_one: 'Stop sign',
        option_two: 'Speed limit sign',
        option_three: 'No parking sign',
        option_four: 'Warning sign',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'When is it safe to pass another vehicle?',
        question_type: 'Safe Passing',
        answer_key: 'When there is a broken yellow line on your side of the road',
        option_one: 'When there is a solid yellow line on your side of the road',
        option_two: 'When the vehicle in front of you is turning left',
        option_three: 'When there is a school zone ahead',
        option_four: 'When there is a broken yellow line on your side of the road',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your brakes fail while driving?',
        question_type: 'Emergency Procedures',
        answer_key: 'Shift to a lower gear, pump the brakes, and look for a safe place to stop',
        option_one: 'Press the brakes harder',
        option_two: 'Turn off the engine immediately',
        option_three: 'Swerve from side to side to slow down',
        option_four: 'Shift to a lower gear, pump the brakes, and look for a safe place to stop',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of anti-lock brakes (ABS)?',
        question_type: 'Vehicle Technology',
        answer_key: 'Prevents wheels from locking up during braking',
        option_one: 'Increases stopping distance',
        option_two: 'Reduces fuel efficiency',
        option_three: 'Makes the brakes less responsive',
        option_four: 'Prevents wheels from locking up during braking',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do when driving in heavy fog?',
        question_type: 'Poor Visibility Conditions',
        answer_key: 'Use low-beam headlights and reduce speed',
        option_one: 'Use high-beam headlights for better visibility',
        option_two: 'Speed up to get through the fog quickly',
        option_three: 'Drive with parking lights only',
        option_four: 'Use low-beam headlights and reduce speed',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a vehicle traveling the wrong way on a one-way street?',
        question_type: 'Unexpected Situations',
        answer_key: 'Slow down and pull over to the side of the road',
        option_one: 'Swerve into the opposite lane to avoid the vehicle',
        option_two: 'Honk your horn and continue driving',
        option_three: 'Speed up to pass the vehicle quickly',
        option_four: 'Slow down and pull over to the side of the road',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a crosswalk?',
        question_type: 'Pedestrian Safety',
        answer_key: 'Designated area for pedestrians to cross the road',
        option_one: 'Designated area for cyclists to cross the road',
        option_two: 'Designated area for vehicles to cross the road',
        option_three: 'Designated area for emergency vehicles to cross the road',
        option_four: 'Designated area for pedestrians to cross the road',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What does a green traffic light indicate?',
        question_type: 'Traffic Signals',
        answer_key: 'Proceed if the intersection is clear',
        option_one: 'Stop and remain stopped',
        option_two: 'Prepare to turn left',
        option_three: 'Proceed if the intersection is clear',
        option_four: 'Prepare to turn right',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the proper way to park,',
        answer_key: 'Turn the wheels towards the curb when facing downhill',
        option_one: 'Turn the wheels away from the curb when facing uphill',
        option_two: 'Leave the vehicle in neutral gear',
        option_three: 'Turn the wheels towards the curb when facing downhill',
        option_four: 'Leave the parking brake off',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to skid?',
        question_type: 'Skid Prevention',
        answer_key: 'Steer in the direction of the skid',
        option_one: 'Brake hard to stop the skid',
        option_two: 'Turn the steering wheel in the opposite direction of the skid',
        option_three: 'Steer in the direction of the skid',
        option_four: 'Swerve sharply to avoid obstacles',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic circle?',
        question_type: 'Traffic Circles',
        answer_key: 'To control traffic flow at intersections',
        option_one: 'To allow pedestrians to cross safely',
        option_two: 'To provide parking spaces',
        option_three: 'To regulate speed limits',
        option_four: 'To control traffic flow at intersections',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you miss your exit on the highway?',
        question_type: 'Highway Navigation',
        answer_key: 'Continue to the next exit',
        option_one: 'Stop and reverse on the shoulder',
        option_two: 'Make a U-turn across the median',
        option_three: 'Stop in the lane and signal for help',
        option_four: 'Continue to the next exit',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic signal with a flashing yellow arrow?',
        question_type: 'Traffic Signals',
        answer_key: 'Indicates you may turn left but must yield to oncoming traffic',
        option_one: 'Indicates you must turn left immediately',
        option_two: 'Indicates you must stop and proceed when safe',
        option_three: 'Indicates you must proceed with caution',
        option_four: 'Indicates you may turn left but must yield to oncoming traffic',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to overheat?',
        question_type: 'Vehicle Maintenance',
        answer_key: 'Pull over and turn off the engine until it cools down',
        option_one: 'Increase the speed to cool the engine',
        option_two: 'Turn on the heater to reduce engine temperature',
        option_three: 'Continue driving at a slower speed',
        option_four: 'Pull over and turn off the engine until it cools down',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: `What should you do if your vehicle's accelerator becomes stuck?`,
        question_type: 'Emergency Situations',
        answer_key: 'Shift to neutral, steer to a safe location, and apply the brakes',
        option_one: 'Turn off the ignition immediately',
        option_two: 'Pump the accelerator pedal rapidly',
        option_three: 'Downshift to a lower gear',
        option_four: 'Shift to neutral, steer to a safe location, and apply the brakes',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the proper procedure for parallel parking?',
        question_type: 'Parking Maneuvers',
        answer_key: 'Position your vehicle parallel to the curb and back into the space',
        option_one: 'Park facing uphill with the wheels turned towards the curb',
        option_two: 'Park at a 45-degree angle to the curb',
        option_three: 'Position your vehicle parallel to the curb and pull forward into the space',
        option_four: 'Park facing downhill with the wheels turned away from the curb',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the correct hand position on the steering wheel?',
        question_type: 'Steering Techniques',
        answer_key: '9 and 3 o\'clock positions',
        option_one: '12 o\'clock position',
        option_two: '6 and 12 o\'clock positions',
        option_three: '10 and 2 o\'clock positions',
        option_four: '9 and 3 o\'clock positions',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you experience a tire blowout while driving?',
        question_type: 'Emergency Situations',
        answer_key: 'Grip the steering wheel firmly and gradually reduce speed',
        option_one: 'Brake hard to stop the vehicle',
        option_two: 'Swerve to the side of the road',
        option_three: 'Accelerate to maintain control',
        option_four: 'Grip the steering wheel firmly and gradually reduce speed',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a yellow flashing traffic signal?',
        question_type: 'Traffic Signals',
        answer_key: 'Proceed with caution',
        option_one: 'Stop and wait for the signal to turn green',
        option_two: 'Accelerate to clear the intersection quickly',
        option_three: 'Stop and remain stopped until the signal stops flashing',
        option_four: 'Proceed with caution',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a school bus with flashing red lights?',
        question_type: 'School Bus Safety',
        answer_key: 'Stop and remain stopped until the lights stop flashing',
        option_one: 'Slow down and proceed with caution',
        option_two: 'Continue driving without stopping',
        option_three: 'Honk your horn to warn the children',
        option_four: 'Stop and remain stopped until the lights stop flashing',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a bicyclist on the road?',
        question_type: 'Sharing the Road',
        answer_key: 'Leave a safe distance when passing',
        option_one: 'Drive close to the cyclist to pass quickly',
        option_two: 'Honk your horn to alert the cyclist',
        option_three: 'Follow closely behind the cyclist',
        option_four: 'Leave a safe distance when passing',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to skid on a wet road?',
        question_type: 'Skid Prevention',
        answer_key: 'Steer gently in the direction you want to go',
        option_one: 'Brake hard to stop the skid',
        option_two: 'Turn the steering wheel sharply in the opposite direction',
        option_three: 'Steer gently in the direction you want to go',
        option_four: 'Swerve from side to side to regain traction',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic circle?',
        question_type: 'Traffic Circles',
        answer_key: 'To control traffic flow at intersections',
        option_one: 'To allow pedestrians to cross safely',
        option_two: 'To provide parking spaces',
        option_three: 'To regulate speed limits',
        option_four: 'To control traffic flow at intersections',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you miss your exit on the highway?',
        question_type: 'Highway Navigation',
        answer_key: 'Continue to the next exit',
        option_one: 'Stop and reverse on the shoulder',
        option_two: 'Make a U-turn across the median',
        option_three: 'Stop in the lane and signal for help',
        option_four: 'Continue to the next exit',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic signal with a flashing yellow arrow?',
        question_type: 'Traffic Signals',
        answer_key: 'Indicates you may turn left but must yield to oncoming traffic',
        option_one: 'Indicates you must turn left immediately',
        option_two: 'Indicates you must stop and proceed when safe',
        option_three: 'Indicates you must proceed with caution',
        option_four: 'Indicates you may turn left but must yield to oncoming traffic',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to overheat?',
        question_type: 'Vehicle Maintenance',
        answer_key: 'Pull over and turn off the engine until it cools down',
        option_one: 'Increase the speed to cool the engine',
        option_two: 'Turn on the heater to reduce engine temperature',
        option_three: 'Continue driving at a slower speed',
        option_four: 'Pull over and turn off the engine until it cools down',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle\'s accelerator becomes stuck?',
        question_type: 'Emergency Situations',
        answer_key: 'Shift to neutral, steer to a safe location, and apply the brakes',
        option_one: 'Turn off the ignition immediately',
        option_two: 'Pump the accelerator pedal rapidly',
        option_three: 'Downshift to a lower gear',
        option_four: 'Shift to neutral, steer to a safe location, and apply the brakes',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the proper procedure for parallel parking?',
        question_type: 'Parking Maneuvers',
        answer_key: 'Position your vehicle parallel to the curb and back into the space',
        option_one: 'Park facing uphill with the wheels turned towards the curb',
        option_two: 'Park at a 45-degree angle to the curb',
        option_three: 'Position your vehicle parallel to the curb and pull forward into the space',
        option_four: 'Park facing downhill with the wheels turned away from the curb',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the correct hand position on the steering wheel?',
        question_type: 'Steering Techniques',
        answer_key: '9 and 3 o\'clock positions',
        option_one: '12 o\'clock position',
        option_two: '6 and 12 o\'clock positions',
        option_three: '10 and 2 o\'clock positions',
        option_four: '9 and 3 o\'clock positions',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you experience a tire blowout while driving?',
        question_type: 'Emergency Situations',
        answer_key: 'Grip the steering wheel firmly and gradually reduce speed',
        option_one: 'Brake hard to stop the vehicle',
        option_two: 'Swerve to the side of the road',
        option_three: 'Accelerate to maintain control',
        option_four: 'Grip the steering wheel firmly and gradually reduce speed',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a yellow flashing traffic signal?',
        question_type: 'Traffic Signals',
        answer_key: 'Proceed with caution',
        option_one: 'Stop and wait for the signal to turn green',
        option_two: 'Accelerate to clear the intersection quickly',
        option_three: 'Stop and remain stopped until the signal stops flashing',
        option_four: 'Proceed with caution',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a school bus with flashing red lights?',
        question_type: 'School Bus Safety',
        answer_key: 'Stop and remain stopped until the lights stop flashing',
        option_one: 'Slow down and proceed with caution',
        option_two: 'Continue driving without stopping',
        option_three: 'Honk your horn to warn the children',
        option_four: 'Stop and remain stopped until the lights stop flashing',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a bicyclist on the road?',
        question_type: 'Sharing the Road',
        answer_key: 'Leave a safe distance when passing',
        option_one: 'Drive close to the cyclist to pass quickly',
        option_two: 'Honk your horn to alert the cyclist',
        option_three: 'Follow closely behind the cyclist',
        option_four: 'Leave a safe distance when passing',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to skid on a wet road?',
        question_type: 'Skid Prevention',
        answer_key: 'Steer gently in the direction you want to go',
        option_one: 'Brake hard to stop the skid',
        option_two: 'Turn the steering wheel sharply in the opposite direction',
        option_three: 'Steer gently in the direction you want to go',
        option_four: 'Swerve from side to side to regain traction',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic circle?',
        question_type: 'Traffic Circles',
        answer_key: 'To control traffic flow at intersections',
        option_one: 'To allow pedestrians to cross safely',
        option_two: 'To provide parking spaces',
        option_three: 'To regulate speed limits',
        option_four: 'To control traffic flow at intersections',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you miss your exit on the highway?',
        question_type: 'Highway Navigation',
        answer_key: 'Continue to the next exit',
        option_one: 'Stop and reverse on the shoulder',
        option_two: 'Make a U-turn across the median',
        option_three: 'Stop in the lane and signal for help',
        option_four: 'Continue to the next exit',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic signal with a flashing yellow arrow?',
        question_type: 'Traffic Signals',
        answer_key: 'Indicates you may turn left but must yield to oncoming traffic',
        option_one: 'Indicates you must turn left immediately',
        option_two: 'Indicates you must stop and proceed when safe',
        option_three: 'Indicates you must proceed with caution',
        option_four: 'Indicates you may turn left but must yield to oncoming traffic',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to overheat?',
        question_type: 'Vehicle Maintenance',
        answer_key: 'Pull over and turn off the engine until it cools down',
        option_one: 'Increase the speed to cool the engine',
        option_two: 'Turn on the heater to reduce engine temperature',
        option_three: 'Continue driving at a slower speed',
        option_four: 'Pull over and turn off the engine until it cools down',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle\'s accelerator becomes stuck?',
        question_type: 'Emergency Situations',
        answer_key: 'Shift to neutral, steer to a safe location, and apply the brakes',
        option_one: 'Turn off the ignition immediately',
        option_two: 'Pump the accelerator pedal rapidly',
        option_three: 'Downshift to a lower gear',
        option_four: 'Shift to neutral, steer to a safe location, and apply the brakes',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the proper procedure for parallel parking?',
        question_type: 'Parking Maneuvers',
        answer_key: 'Position your vehicle parallel to the curb and back into the space',
        option_one: 'Park facing uphill with the wheels turned towards the curb',
        option_two: 'Park at a 45-degree angle to the curb',
        option_three: 'Position your vehicle parallel to the curb and pull forward into the space',
        option_four: 'Park facing downhill with the wheels turned away from the curb',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the correct hand position on the steering wheel?',
        question_type: 'Steering Techniques',
        answer_key: '9 and 3 o\'clock positions',
        option_one: '12 o\'clock position',
        option_two: '6 and 12 o\'clock positions',
        option_three: '10 and 2 o\'clock positions',
        option_four: '9 and 3 o\'clock positions',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you experience a tire blowout while driving?',
        question_type: 'Emergency Situations',
        answer_key: 'Grip the steering wheel firmly and gradually reduce speed',
        option_one: 'Brake hard to stop the vehicle',
        option_two: 'Swerve to the side of the road',
        option_three: 'Accelerate to maintain control',
        option_four: 'Grip the steering wheel firmly and gradually reduce speed',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a yellow flashing traffic signal?',
        question_type: 'Traffic Signals',
        answer_key: 'Proceed with caution',
        option_one: 'Stop and wait for the signal to turn green',
        option_two: 'Accelerate to clear the intersection quickly',
        option_three: 'Stop and remain stopped until the signal stops flashing',
        option_four: 'Proceed with caution',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a school bus with flashing red lights?',
        question_type: 'School Bus Safety',
        answer_key: 'Stop and remain stopped until the lights stop flashing',
        option_one: 'Slow down and proceed with caution',
        option_two: 'Continue driving without stopping',
        option_three: 'Honk your horn to warn the children',
        option_four: 'Stop and remain stopped until the lights stop flashing',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you encounter a bicyclist on the road?',
        question_type: 'Sharing the Road',
        answer_key: 'Leave a safe distance when passing',
        option_one: 'Drive close to the cyclist to pass quickly',
        option_two: 'Honk your horn to alert the cyclist',
        option_three: 'Follow closely behind the cyclist',
        option_four: 'Leave a safe distance when passing',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to skid on a wet road?',
        question_type: 'Skid Prevention',
        answer_key: 'Steer gently in the direction you want to go',
        option_one: 'Brake hard to stop the skid',
        option_two: 'Turn the steering wheel sharply in the opposite direction',
        option_three: 'Steer gently in the direction you want to go',
        option_four: 'Swerve from side to side to regain traction',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic circle?',
        question_type: 'Traffic Circles',
        answer_key: 'To control traffic flow at intersections',
        option_one: 'To allow pedestrians to cross safely',
        option_two: 'To provide parking spaces',
        option_three: 'To regulate speed limits',
        option_four: 'To control traffic flow at intersections',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if you miss your exit on the highway?',
        question_type: 'Highway Navigation',
        answer_key: 'Continue to the next exit',
        option_one: 'Stop and reverse on the shoulder',
        option_two: 'Make a U-turn across the median',
        option_three: 'Stop in the lane and signal for help',
        option_four: 'Continue to the next exit',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What is the purpose of a traffic signal with a flashing yellow arrow?',
        question_type: 'Traffic Signals',
        answer_key: 'Indicates you may turn left but must yield to oncoming traffic',
        option_one: 'Indicates you must turn left immediately',
        option_two: 'Indicates you must stop and proceed when safe',
        option_three: 'Indicates you must proceed with caution',
        option_four: 'Indicates you may turn left but must yield to oncoming traffic',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle starts to overheat?',
        question_type: 'Vehicle Maintenance',
        answer_key: 'Pull over and turn off the engine until it cools down',
        option_one: 'Increase the speed to cool the engine',
        option_two: 'Turn on the heater to reduce engine temperature',
        option_three: 'Continue driving at a slower speed',
        option_four: 'Pull over and turn off the engine until it cools down',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_data: 'What should you do if your vehicle\'s accelerator becomes stuck?',
        question_type: 'Emergency Situations',
        answer_key: 'Shift to neutral, steer to a safe location, and apply the brakes',
        option_one: 'Turn off the ignition immediately',
        option_two: 'Pump the accelerator pedal rapidly',
        option_three: 'Downshift to a lower gear',
        option_four: 'Shift to neutral, steer to a safe location, and apply the brakes',
        created_at: new Date(),
        updated_at: new Date()
    }]


module.exports = {
    async up(db, client) {
        db.collection('questions').insertMany(questionsToInsert)
            .then((insertedQuestions) => {
                console.log('Questions inserted successfully:', insertedQuestions);
            })
            .catch((error) => {
                console.error('Error inserting questions:', error);
            })
            .finally(() => {
                db.dis
            });

    },

    async down(db, client) {
        // TODO write the statements to rollback your migration (if possible)
        // Example:
        // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    }
};