useEffect(() => {getHats()}, []);

const deleteHat = (id) => async () => {


  try {
    const url = `http://localhost:8090/api/hats/${id}/`;
    const deleteResponse = await fetch(url,
        {
            method: "delete"
        }
    );

    if (deleteResponse.ok) {
      const refreshUrl = "http://localhost:8090/api/hats/";
      const reloadResponse = await fetch(refreshUrl);
      const newHats = await reloadResponse.json();
      setHats(newHats.hats);
    }

  }
  catch (e) {

  }
};

if (hats === undefined) {
  return null;
}
