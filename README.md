## Song Selection App (feature)
- Songs are selected via button and the version is displayed

-  **STATE**
    | Reducers |
    |:---|
    | song list reducer |
    | slected song reducer |

    | Action Creater |
    |:---|
    | selected song |

## Redux Notes:
- **REDUX CYCLE**

    |  ACTION CREATOR  |   ACTION  |   DISPATCH    |  REDUCERS   |      STATE         |
    |:----------------:|:---------:|:-------------:|:-----------:|:------------------:|
    | form dropped off | the form  | form receiver | departments | compiled dept data |

- **ACTION CREATOR** produces an **ACTION** that is fed to **DISPATCH** then forwards the action to the **REDUCERS** which  creates a new **STATE** object.

- There is no direct access to STATE



