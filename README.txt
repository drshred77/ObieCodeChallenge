Obie Code Challenge - Daniel Talpas


Run the server: npm start (server will run on http://localhost:3000)

There are two API endpoints /carriers and /states 

    All given states are supported
    Allstate, Founders, Guard, Hippo, Lemonade, National General, Nationwide, Progressive, Neptune, Seneca carriers are supported
    flood, auto, fire insurance types are supported
    Parameter values are not case sensitive so:
        http://localhost:3000/carriers?insuranceType=fire

        and

        http://localhost:3000/carriers?insuranceType=FiRe

        will return the same response.


The CARRIER API supports searching for carriers by state and/or insurance type...

You can search all carriers regardless of state or insurance type by simply navigating to:

    http://localhost:3000/carriers

You can search for carriers by insurance type by simply navigating to:

    http://localhost:3000/carriers?insuranceType=fire

You can search for carriers by state by simply navigating to:

    http://localhost:3000/carriers?state=IN

You can search for carriers by state and insurance type by simply navigating to:

    http://localhost:3000/carriers?state=IN&insuranceType=auto


The STATE API supports searching for states by carrier and/or insurance type...

You can search all states regardless of carrier or insurance type simply by navigating to:

    http://localhost:3000/states

You can search for states by insurance type only by simply navigating to:

    http://localhost:3000/states?insuranceType=auto

You can search for states by carrier only by simply navigating to:

    http://localhost:3000/states?carrier=Guard

You can search for states by both carrier and insurance type by simply navigating to:

    http://localhost:3000/states?carrier=Guard&insuranceType=fire