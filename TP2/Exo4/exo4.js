const div = document.getElementById("divTP4");

div.innerHTML = `
    <form enctype="multipart/form-data" method="post" action="upload.php">
        <fieldset>
            <legend>Uploader une image</legend>
            <div style="text-align: center">
                <label for="inputUpload">Image à uploader :</label>
                <input type="file" name="inputUpload" id="inputUpload" /> <br /><br />
                <input type="submit" value="Envoyer" />
            </div>
        </fieldset>
    </form>
`;
