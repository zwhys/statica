INSERT INTO
    users (username, hashed_password)
VALUES
    ('admin', '$2b$10$NLTuvAVTPjucQe8fMSKwxOIflgWR4opMu4fdkYbGmm4O5GZbKbKJW'),
    ('mogojohn', '$2b$10$4OtE3iv3hdd.tHSaogPBPOsOIK2JOvgTWEd5.MbkL35vShPcrJtlq');


INSERT INTO 
    exercise_types (exercise_type, colour)
VALUES
    ('Push-Up', '#FF5733'),
    ('Squat', '#33FF57'),
    ('Deadlift', '#3357FF'),
    ('Plank', '#FF33A1'),
    ('Pull-Up', '#FF8333'),
    ('Bench Press', '#FFBF33'),
    ('Lunge', '#33FFDB'),
    ('Bicep Curl', '#F733FF'),
    ('Tricep Dip', '#33D1FF'),
    ('Chin-Up', '#F7D733'),
    ('Overhead Press', '#33B8FF'),
    ('Leg Press', '#FF33C7'),
    ('Bent Over Row', '#A833FF'),
    ('Dumbbell Press', '#33FFC4'),
    ('Box Jump', '#F3FF33'),
    ('Mountain Climber', '#FF4B33'),
    ('Russian Twist', '#33FF99'),
    ('Jump Rope', '#FF33EC'),
    ('Shoulder Press', '#8B33FF'),
    ('Sit-Up', '#FF8B33');



-- Insert records for each exercise type
INSERT INTO records (user_id, date_of_entry, exercise_type, sets, reps, remarks, created_at, updated_at, deleted_at) 
VALUES
    (1, '2024-06-26', 'Push-Up', 3, 15, 'Feeling good today', NOW(), NOW(), NULL),
    (2, '2024-06-27', 'Push-Up', 4, 12, 'Tough but doable', NOW(), NOW(), NULL),

    (1, '2024-06-25', 'Squat', 4, 20, 'Legs feeling strong', NOW(), NOW(), NULL),
    (2, '2024-06-26', 'Squat', 3, 18, 'Focused on depth', NOW(), NOW(), NULL),

    (1, '2024-06-24', 'Deadlift', 5, 5, 'New personal record', NOW(), NOW(), NULL),
    (2, '2024-06-23', 'Deadlift', 4, 6, 'Increased weight', NOW(), NOW(), NULL),

    (1, '2024-06-28', 'Plank', 3, 60, 'Held longer than before', NOW(), NOW(), NULL),
    (2, '2024-06-29', 'Plank', 2, 45, 'Struggling with form', NOW(), NOW(), NULL),

    (1, '2024-06-30', 'Pull-Up', 3, 10, 'Improved grip strength', NOW(), NOW(), NULL),
    (2, '2024-06-25', 'Pull-Up', 2, 8, 'Still working on it', NOW(), NOW(), NULL),

    (1, '2024-06-22', 'Bench Press', 4, 10, 'Added extra set', NOW(), NOW(), NULL),
    (2, '2024-06-21', 'Bench Press', 3, 12, 'Increased weight', NOW(), NOW(), NULL),

    (1, '2024-06-24', 'Lunge', 4, 15, 'Felt good', NOW(), NOW(), NULL),
    (2, '2024-06-25', 'Lunge', 3, 20, 'Focused on form', NOW(), NOW(), NULL),

    (1, '2024-06-26', 'Bicep Curl', 4, 12, 'Increased weight', NOW(), NOW(), NULL),
    (2, '2024-06-27', 'Bicep Curl', 3, 15, 'Felt the burn', NOW(), NOW(), NULL),

    (1, '2024-06-22', 'Tricep Dip', 3, 12, 'Focus on depth', NOW(), NOW(), NULL),
    (2, '2024-06-23', 'Tricep Dip', 4, 10, 'Added extra reps', NOW(), NOW(), NULL),

    (1, '2024-06-21', 'Chin-Up', 3, 8, 'Improved form', NOW(), NOW(), NULL),
    (2, '2024-06-22', 'Chin-Up', 2, 7, 'Working on pull strength', NOW(), NOW(), NULL),

    (1, '2024-06-23', 'Overhead Press', 3, 10, 'Focus on shoulder engagement', NOW(), NOW(), NULL),
    (2, '2024-06-24', 'Overhead Press', 4, 8, 'Used a heavier weight', NOW(), NOW(), NULL),

    (1, '2024-06-25', 'Leg Press', 4, 15, 'Increased weight', NOW(), NOW(), NULL),
    (2, '2024-06-26', 'Leg Press', 3, 18, 'Focus on full extension', NOW(), NOW(), NULL),

    (1, '2024-06-28', 'Bent Over Row', 4, 12, 'Better form today', NOW(), NOW(), NULL),
    (2, '2024-06-29', 'Bent Over Row', 3, 10, 'Focus on squeeze', NOW(), NOW(), NULL),

    (1, '2024-06-30', 'Dumbbell Press', 3, 10, 'Increased reps', NOW(), NOW(), NULL),
    (2, '2024-06-27', 'Dumbbell Press', 4, 12, 'Felt strong', NOW(), NOW(), NULL),

    (1, '2024-06-23', 'Box Jump', 5, 8, 'Increased height', NOW(), NOW(), NULL),
    (2, '2024-06-24', 'Box Jump', 4, 6, 'Focused on speed', NOW(), NOW(), NULL),

    (1, '2024-06-21', 'Mountain Climber', 4, 20, 'Pushed harder', NOW(), NOW(), NULL),
    (2, '2024-06-22', 'Mountain Climber', 3, 15, 'Slight improvement', NOW(), NOW(), NULL),

    (1, '2024-06-23', 'Russian Twist', 4, 25, 'Feeling good', NOW(), NOW(), NULL),
    (2, '2024-06-24', 'Russian Twist', 3, 20, 'Felt the burn', NOW(), NOW(), NULL),

    (1, '2024-06-21', 'Jump Rope', 3, 50, 'Worked on endurance', NOW(), NOW(), NULL),
    (2, '2024-06-22', 'Jump Rope', 4, 45, 'Increased speed', NOW(), NOW(), NULL),

    (1, '2024-06-23', 'Shoulder Press', 3, 12, 'Focused on form', NOW(), NOW(), NULL),
    (2, '2024-06-24', 'Shoulder Press', 4, 10, 'Increased weight', NOW(), NOW(), NULL),

    (1, '2024-06-26', 'Sit-Up', 4, 20, 'Worked on form', NOW(), NOW(), NULL),
    (2, '2024-06-25', 'Sit-Up', 3, 25, 'Focused on pace', NOW(), NOW(), NULL);



-- psql -h localhost -U ZiYan -d railwaydb -f /Users/ZiYan/Desktop/railway/backend/prisma/seed.sql
-- command to run seeding scripts