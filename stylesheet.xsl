<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <h2>My CD Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
    </tr>
    <xsl:for-each select="file">
    <tr>
      <td><xsl:value-of select="text" /></td>
    </tr>
    </xsl:for-each>
  </table>
</xsl:template>

</xsl:stylesheet>
