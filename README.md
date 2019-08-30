## Project Insurance Company (feature)
- Policy - contract between company and customers
     
     New Policy Form -> Front Counter | Make 3 copies and distribute

        1. copy #1 -> ACCOUNTING - stores a big bag of cash
        2. copy #2 -> CLAIMS - history stores a list of every claim
        3. copy #3 -> POLICY - stores a list of active policies

    **Story:** 
    All department data will be stored in a centeral repository, outside of department. 
    The form receiver will find list of policies, then hand it to to the POLICY department
    Policy department will need to update list of policies in the centeral repository
    Forms have two parts, a type and payload data

## Redux Notes:
- **REDUX CYCLE**

    |  ACTION CREATOR  |   ACTION  |   DISPATCH    |  REDUCERS   |      STATE         |
    |:----------------:|:---------:|:-------------:|:-----------:|:------------------:|
    | form dropped off | the form  | form receiver | departments | compiled dept data |





